"use client";

import Image from "next/image";
import GoogleSignIn from "@/app/components/googleSignin";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen bg-white flex items-center justify-center">
        <h3 className="text-black font-bold text-5xl px-34 text-center">
          Firebase Authentication
        </h3>
      </div>
      <div className="w-1/2 h-screen bg-white flex items-center justify-center">
        <div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}
