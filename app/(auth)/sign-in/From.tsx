"use client";
import GoogleButton from "@/app/components/button/GoogleButton";

export default function Form() {
  return (
    <div className="mx-auto text-center flex flex-col items-center w-4/5 md:w-1/5">
      <div className="text-primary-600 text-3xl font-semibold">
        Login to Tayog
      </div>
      <div className="text-primary-600 text-lg">
        You are just a few steps away!
      </div>
      <div className="mt-3 w-full">
     
        <GoogleButton text="Login with Google" />
      </div>
    </div>
  );
}
