import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import type { Winner } from "./types";
import { useWindowSize } from "react-use";

interface WinnerCardProps {
    stage: { color: string; icon: string };
    winner: Winner;
}

export const WinnerCard = ({ stage, winner }: WinnerCardProps) => {
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Delay card and confetti appearance by a few seconds
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setShowCard(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);
      const { width, height } = useWindowSize(); // for confetti

  return (
    <div className="relative">
      {/* Show span immediately */}
      <span className="text-3xl font-bold text-white block mb-4">
        ${winner.place}rd Place ---
      </span>

      {/* Show confetti when card appears */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={100}
        />
      )}

      {/* Show card after delay with confetti */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            key={winner.place}
            className={`rounded-lg p-6 w-48 ${stage.color} text-white font-bold shadow-lg`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            🥉 {winner.name} — {winner.score} Points
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}