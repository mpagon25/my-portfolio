import React from "react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cover filter blur-sm scale-110" />
      <div className="relative flex pt-20 h-screen">test</div>
    </div>
  );
}
