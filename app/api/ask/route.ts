import { NextResponse } from "next/server";
import Together from "together-ai";
import path from "path";
import fs from "fs";
import { extractTextFromPDF } from "@/lib/pdfUtils";

const client = new Together();

export async function POST(req: Request) {
  const { question, pdfFileName } = await req.json();

  if (!question) {
    return NextResponse.json(
      { error: "Question is required" },
      { status: 400 }
    );
  }

  if (!pdfFileName) {
    return NextResponse.json(
      { error: "PDF filename is required" },
      { status: 400 }
    );
  }

  try {
    // ✅ Build full path from /public/uploads
    const pdfPath = path.join(process.cwd(), "public", "uploads", pdfFileName);

    if (!fs.existsSync(pdfPath)) {
      return NextResponse.json(
        { error: `PDF file ${pdfFileName} not found in /public/uploads` },
        { status: 404 }
      );
    }

    const pdfBuffer: any = fs.readFileSync(pdfPath);

    // ✅ Extract text from PDF
    const textbookContent = await extractTextFromPDF(pdfBuffer);

    if (!textbookContent) {
      return NextResponse.json(
        { error: "Could not extract textbook content" },
        { status: 500 }
      );
    }

    // ✅ Study mode optimized prompt
    const systemPrompt = `
You are StudyBuddy, a badass, no-BS study assistant. You only answer from the textbook I give you. No guessing, no fluff. Keep it raw, clear, and step by step. Make the student feel like they are fighting through confusion and winning. 

Rules:
1. **Only use the textbook content.** No extra info, no lies.
2. Explain **step by step** like you’re breaking it down for a rookie fighter.
3. Highlight **key terms in bold** so they hit hard and stick.
4. If the textbook doesn’t have the answer, say: "The textbook does not provide enough information to answer this." No excuses.
5. For long answers, give a **quick summary** at the end—like a knockout punch of info.
6. Keep it **friendly but edgy**—like a buddy who won’t let you slack.
7. Use examples straight from the textbook to **train the mind**.

Here’s the textbook content you must use:
---
${textbookContent}
---
`;

    

    // ✅ Single API call (no chunking needed)
    const response = await client.chat.completions.create({
      model: "meta-llama/Llama-Vision-Free", // lighter + cheaper than llama vision
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
    });

    const answer =
      response.choices[0].message?.content?.trim() ||
      "No definitive answer found in the textbook.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error processing PDF:", error);
    return NextResponse.json(
      { error: "Error processing PDF" },
      { status: 500 }
    );
  }
}
