"use client"; // This ensures the component is treated as a Client Component

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface GoogleButtonProps {
  text: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ text }) => {
  return (
    <button
      onClick={() => signIn("google")} // Trigger client-side sign-in
      className="w-full flex py-2 border border-neutral-200 rounded-lg justify-center items-center"
    >
      <Image
        src={"/googlelogo.png"}
        alt="Google"
        width={25}
        height={25}
        className=""
      />
      <div className="text-black ml-2 text-sm">{text}</div>
    </button>
  );
};

export default GoogleButton;
