import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import type { Winner } from "./types";

interface WinnerCardProps {
  stage: { color: string; place: number };
  winner: Winner;
}

const glowTextShadow = [
  "0 0 5px #37032e",
  "0 0 6px #970a90",
  "0 0 7px #ab0692",
  "0 0 6px #970a90",
  "0 0 5px #37032e",
];

export const WinnerCard = ({ stage, winner }: WinnerCardProps) => {
  const { width, height } = useWindowSize();
  const entryDelay = stage.place === 4 ? 0 : 1.3;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${stage.place !== 4 ? "mb-[70px]" : ""} ${winner.place === 1 && stage.place === 4 ? "mb-[100px]" : "mb-[-200px]"}`}
    >
      {stage.place === 4 && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={1000}
        />
      )}

      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08, 1],
          textShadow: glowTextShadow,
        }}
        transition={{
          opacity: { duration: 0.6 },
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="text-[#ffd2f8] text-[57px] font-[cursive]"
      >
        {winner.place}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08, 1],
          textShadow: glowTextShadow,
        }}
        transition={{
          opacity: { duration: 0.6, delay: entryDelay },
          scale: { duration: 1.2, delay: entryDelay, ease: "easeInOut", repeat: Infinity },
          textShadow: { duration: 1.2, delay: entryDelay, ease: "easeInOut", repeat: Infinity },
        }}
        className="flex items-center text-center text-[110px] text-[#f1e6f0] h-[100px] mt-[17px]"
      >
        {winner.name}
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: entryDelay,
          duration: 0.6,
        }}
        className="mt-[27px] text-[32px] text-[#f1e6f0]"
      >
        {winner.score} Points
      </motion.span>
    </motion.div>
  );
};
