"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500">
      <Navbar className="top-2" />
    

      </div>
   
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="
          Shaders">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://tomaslonnblad.github.io/earth2-640.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tomaslonnblad.github.io/tl22211111/"
              src="https://tomaslonnblad.github.io/moves-640.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://tomaslonnblad.github.io/tl2222111111/"
              src="https://tomaslonnblad.github.io/black-640.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://tomaslonnblad.github.io/tl33555555"
              src="https://tomaslonnblad.github.io/dotts-640.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}
