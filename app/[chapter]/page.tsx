"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Share2 } from "lucide-react";
import Link from "next/link";

export default function ChapterPage() {
  const params = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant" |any; content: string; loading?: boolean }[]
  >([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const chapterSlug = params?.chapter as string;
  const chapterNumberMatch = chapterSlug?.match(/chapter-(\d+)/i);
  const pdfFileName = chapterNumberMatch ? `ch${chapterNumberMatch[1]}.pdf` : null;

  const formattedChapterName = chapterSlug
    ? chapterSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Chapter";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const rules = [
    "Be specific – mention the chapter, exercise, or question number.",
    "Step by step – ask for one concept or question at a time.",
    "Use textbook content – the assistant only answers based on the given textbook.",
    "Highlight important terms – ask for bolded keywords if you want clarity.",
    "Summarize long answers – ask for a quick summary at the end if the solution is long.",
    "No guesses – if it’s not in the textbook, the assistant will say: “The textbook doesn’t provide enough info to answer this.”",
    "Short and clear questions – avoid long paragraphs, keep it simple.",
  ];

  async function sendMessage() {
    if (!input.trim() || !pdfFileName) return;

    const question = input;
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");

    // Add a loading message with fun Gen Z vibe
    const loadingMessage = { role: "assistant", content: "📖 Just reading the text, hang tight... 😎", loading: true };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, pdfFileName }),
      });

      const data = await res.json();

      setMessages((prev) =>
        prev.map((m) =>
          m.loading
            ? { role: "assistant", content: data.answer || data.error || "No response" }
            : m
        )
      );
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.loading ? { role: "assistant", content: "⚠️ Error contacting server." } : m
        )
      );
    }
  }

  function handleNativeShare(content: string) {
    if (navigator.share) {
      navigator
        .share({ title: "LearnCBSE Answer", text: content, url: window.location.href })
        .catch((err) => console.log("Error sharing:", err));
    } else {
      alert("Sharing not supported on this device. Try copy instead.");
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      {/* Header */}
      <div className="sticky z-10 p-4 text-lg font-semibold text-center">
       <Link href={'/'}> <p className=" top-0 z-20 text-center text-pink-600 font-bold italic text-sm ">
          learncbse
        </p></Link>{" "}
        📘 {formattedChapterName}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
        {messages.length === 0 && (
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 mb-4 border-l-4 border-pink-600 shadow-md">
            <h2 className="text-lg font-bold mb-2">⚡ Rules to Get the Best Answers</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] relative p-3 rounded-2xl border shadow-md prose prose-sm ${m.role === "user" ? "bg-secondary text-black rounded-br-none" : "bg-white text-black rounded-bl-none"}`}>
              {!m.loading && (
                <div className="absolute -bottom-10 right-0">
                  <Button onClick={() => handleNativeShare(m.content)} title="Share" className="text-xs rounded-full" size={"sm"}>
                    <Share2 className="!w-3 !h-3" /> Share
                  </Button>
                </div>
              )}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 z-20 p-4 border rounded-t-3xl bg-white">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message your study assistant..."
            className="flex-1 resize-none border rounded-2xl px-4 py-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50 h-12"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <Button onClick={sendMessage} className="absolute right-6 rounded-2xl flex items-center justify-center">
            <ArrowRightCircle className="w-10 h-10" />
          </Button>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          Ask your doubts below. Use <b>exercise/question numbers</b> if possible.
        </p>
      </div>
    </div>
  );
}
