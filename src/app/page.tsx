"use client";

import { useEffect, useState } from "react";
import Welcome from "@/views/mobile/Welcome";

export default function Page() {
  const [view, setView] = useState<"loading" | "mobile" | "desktop">("loading");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    
    setTimeout(() => {
      setView(isMobile ? "mobile" : "desktop");
    }, 800);
  }, []);

  if (view === "loading") {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <p className="text-white text-lg font-medium">Секундочку…</p>
      </div>
    );
  }

  if (view === "mobile") {
    return <Welcome />;
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white text-black">
      <p>Desktop View Placeholder</p>
    </div>
  );
}
