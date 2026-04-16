"use client";
import { cn } from "@/lib/utils";

export default function CardDemo() {
  return (
    <div className="relative w-full absolute absolute inset-0">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://tomaslonnblad.github.io/2.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://tomaslonnblad.github.io/p.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://tomaslonnblad.github.io/p.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
      
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
  
          </p>
        </div>
      </div>
    </div>
  );
}
