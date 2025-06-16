

 import React, { useEffect, useState } from "react";
import vd from "../assets/video.mp4";

const Contact = () => {
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000; // Scroll amount to grow fully

      const progress = Math.min(scrollY / maxScroll, 1); // clamp 0-1

      // From 300px to 100vw (or 100% screen width)
      const targetWidth = 300 + progress * (window.innerWidth - 300);
      const targetHeight = 300 + progress * (window.innerHeight - 300);

      setSize({ width: targetWidth, height: targetHeight });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full bg-black">
      {/* Scroll trap area */}
      <section className="h-[250vh] relative">
        {/* Video stays fixed in center */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <video
            src={vd}
            autoPlay
            loop
            muted
            className="rounded-xl shadow-xl transition-all duration-300 ease-out object-cover"
            style={{
              width: `${size.width}px`,
              height: `${size.height}px`,
            }}
          />
        </div>
      </section>

      {/* Content after zoom */}
      <section className="h-screen bg-gray-100 flex items-center justify-center text-3xl font-bold">
        Section 1 - About
      </section>

      <section className="h-screen bg-white flex items-center justify-center text-3xl font-bold">
        Section 2 - Features
      </section>

      <section className="h-screen bg-gray-200 flex items-center justify-center text-3xl font-bold">
        Section 3 - Contact
      </section>
    </main>
  );
};

export default Contact;
