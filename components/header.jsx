"use server";
import Image from "next/image";
import Button from "./button";
import { HiPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { User_Image } from "@/utils/constants";

const Header = () => {
  return (
    <header className=" flex px-3 sm:px-6 justify-between border-b-2 border-blue-400  ">
      <div className="flex items-center  gap-1 sm:gap-3 ">
        <Image
          src="/images/header-logo.ico"
          alt="header-logo"
          height={50}
          width={50}
        />
        <h1 className="sm:text-xl font-extrabold">PROJECTS</h1>
      </div>
      <div className="flex p-2 sm:p-4 gap-1 sm:gap-4">
        <Button
          text="Add Project"
          color="white"
          backgroundColor="rgb(59 130 246)"
          icon={<HiPencilSquare size={20} />}
        />
        <Button
          text="Sign out"
          color="black"
          backgroundColor="rgb(209 213 219)"
          icon={<HiOutlineArrowLeftOnRectangle size={20} />}
        />
        <Image src={User_Image} width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;
