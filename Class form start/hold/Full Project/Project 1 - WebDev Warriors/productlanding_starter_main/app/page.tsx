import Home from "@/components/Home/Home";
import React from "react";






export default function page() {
  return (
    <div>
      <Home />
      <Hero />
    </div>
  );
}


export function Hero () {
  return (<div>
    hero page component
  </div>)
}