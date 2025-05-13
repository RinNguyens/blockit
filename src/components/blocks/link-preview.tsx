"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewSection() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://vietmind.chat" className="font-bold">
          Vietmind
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://crypto.tcafe.live/" className="font-bold">
          CryptoMind
        </LinkPreview>{" "}
        is a great way to build and track realtime data.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://vietmind.chat"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Vietmind
        </LinkPreview>{" "}
        Accessible, personalized psychotherapy to nourish your mind.
      </p>
    </div>
  );
}
