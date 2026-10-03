import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imgX = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const imgY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-screen overflow-hidden bg-background"
    >
      {/* Parallax hero image */}
        <motion.img
        src={heroBg}
        alt="Cassidy Lane — golden hour portrait"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ x: imgX, y: imgY, scale: 1.1 }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Giant band name — bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="font-display text-[22vw] md:text-[18vw] leading-[0.8] text-foreground/[0.22] text-center whitespace-nowrap pb-2 md:pb-4"
        >
          CASSIDY LANE
        </motion.h1>
      </div>
    </div>
  );
};

export default Index;
