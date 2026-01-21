"use client";
import React from "react";
import { motion } from "motion/react";

const TextFade = ({
  className,
  textContent,
}: {
  className?: string;
  textContent?: string;
}) => {
  const text = textContent || "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const words = text.split(" ");

  return (
    <div className="h-full w-full">
      <span
        className={`flex items-center justify-start gap-x-1.5 flex-wrap ${className ? ` ${className}` : ""
          }`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.3, filter: "blur(1.3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </div>
  );
};

export default TextFade;
