import { useState, useEffect } from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { stages, winners } from "./const";
import { WinnerCard } from "./WinnerCard";
import { AnimatePresence, motion } from "framer-motion";
import type { Winner } from "./types";

const stageKeys = ["start", "third", "second", "first", "final"] as const;
type StageKey = (typeof stageKeys)[number];

const stageNext: Record<StageKey, StageKey | null> = {
  start: "third",
  third: "second",
  second: "first",
  first: "final",
  final: null,
};

const stageTimeout: Record<StageKey, number | null> = {
  start: null,
  third: 3800,
  second: 3800,
  first: 6000,
  final: null,
};

const winnerByStage: Partial<Record<StageKey, Winner>> = {
  third: winners[0],
  second: winners[1],
  first: winners[2],
};

export default function FinalsReveal() {
  const [stage, setStage] = useState<StageKey>("start");

  useEffect(() => {
    const duration = stageTimeout[stage];
    if (!duration) return;

    const timer = window.setTimeout(() => {
      const nextStage = stageNext[stage];
      if (nextStage) setStage(nextStage);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [stage]);

  const nextStage = () => {
    if (stage === "start") setStage("third");
  };

  const currentStage = stages[stage];
  const activeWinner = winnerByStage[stage];
  const shouldRender = stage !== "start";

  return (
    <div className="h-screen flex items-center justify-center bg-[#000000]">
      {stage === "start" && (
        <motion.button
          onClick={nextStage}
          animate={{
            boxShadow: [
              "0 0 5px #740c67",
              "0 0 20px #3b0632",
              "0 0 40px #8716c4",
              "0 0 20px #3b0632",
              "0 0 5px #740c67",
            ],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
    w-[17rem] h-[10rem]
    flex items-center justify-center
    rounded-[65px]
    bg-[#261E0D]
    text-[#8716c4]
    border-4 border-red-600
    font-[cursive] text-[50px]
    cursor-pointer
  "
        >
          <motion.div
            className="flex items-center"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaGooglePlay color="#8716c4" />
            <span className="ml-[5px]">Start!</span>
          </motion.div>
        </motion.button>
      )}
      {shouldRender && (
        <div className="relative flex flex-row justify-around text-center items-center overflow-hidden bg-[url('./assets/podium.jpg')] bg-cover bg-bottom h-screen w-screen">
          <AnimatePresence mode="wait">
            {currentStage.place === 4 ? (
              [winners[1], winners[2], winners[0]].map((winner) => (
                <WinnerCard
                  key={winner.place}
                  stage={currentStage}
                  winner={winner}
                />
              ))
            ) : (
              <WinnerCard
                key={stage}
                stage={currentStage}
                winner={activeWinner!}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
