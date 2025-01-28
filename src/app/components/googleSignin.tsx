"use client";

import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GoogleLogo from "@/assets/google.jpg";

const GoogleSignIn = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    if (!isClient) return;

    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      console.log("User Info:", user);

      const name = user.displayName || "User";
      router.push(`/dashboard?name=${encodeURIComponent(name)}`);

      alert(`Welcome ${name}!`);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      alert("There was an issue signing in with Google. Please try again.");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-400 border px-20 text-black p-2 rounded-lg flex items-center flex-row gap-2 text-md font-medium"
    >
      <Image
        src={GoogleLogo}
        width={30}
        height={30}
        alt="Google Logo"
        layout="intrinsic"
      />
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
