import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingBall = () => {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ball moves down as user scrolls
  const ballY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {/* SVG Curved Line */}
      <svg className="absolute left-0 top-0 w-auto h-full" viewBox="0 0 200 500" fill="none">
        <path
          d="M10,0 C50,200 -20,300 10,500 10,600 -10,700 10,900"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="1"
        />
      </svg>

      {/* Moving Ball */}
      <motion.div
        className="absolute left-[5px] w-12 h-12 bg-white rounded-full shadow-xl"
        style={{ y: ballY }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-purple-300 rounded-full blur-lg opacity-50"></div>
      </motion.div>
    </div>
  );
};

export default FloatingBall;
