"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const displayName = searchParams.get("name");

  return (
    <div className="bg-white flex w-full h-screen items-center justify-center">
      {displayName ? (
        <h3 className="text-black text-xl font-bold">Welcome, {displayName}!</h3>
      ) : (
        <h3 className="text-black text-xl font-bold">WelCum</h3>
      )}
    </div>
  );
}
