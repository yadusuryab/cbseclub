import { NextPage } from "next";
import Link from "next/link";
import { ModeToggle } from "../toggle";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="flex justify-between items-center  py-2">
      <Link href={"/cbse-club-rules"}>Rules</Link>
      <h2 className="text-2xl italic text-pink-500 font-bold ">
        <Link href={"/"}>cbseclub</Link>
      </h2>
      <ModeToggle/>
    </header>
  );
};

export default Header;
