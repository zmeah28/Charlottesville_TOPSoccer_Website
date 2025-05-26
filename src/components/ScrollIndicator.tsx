"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SoccerBallIcon from "@/assets/images/soccer_ball.png";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <motion.div
      style={{ top: yOffset }}
      className="pointer-events-none absolute left-0 w-6 h-6"
    >
      <Image src={SoccerBallIcon} alt="scroll ball" />
    </motion.div>
  );
}
