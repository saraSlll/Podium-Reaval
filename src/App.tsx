import { useState, useEffect } from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { stages, winners } from "./const";
import { WinnerCard } from "./WinnerCard";
import { AnimatePresence, motion } from "framer-motion";

export default function FinalsReveal() {
  const [stage, setStage] = useState<
    "start" | "third" | "second" | "first" | "final"
  >("start");
  const [currWinner, setCurrWinner] = useState(winners[0]);

  useEffect(() => {
    let timer: number;

    if (stage === "third") {
      setCurrWinner(winners[0]);
      timer = window.setTimeout(() => setStage("second"), 3800);
    } else if (stage === "second") {
      setCurrWinner(winners[1]);
      timer = window.setTimeout(() => setStage("first"), 3800);
    } else if (stage === "first") {
      setCurrWinner(winners[2]);
      timer = window.setTimeout(() => setStage("final"), 6000);
    }

    return () => window.clearTimeout(timer);
  }, [stage]);

  const nextStage = () => {
    if (stage === "start") setStage("third");
  };

  const currentStage = stages[stage as keyof typeof stages];
  const shouldRender =
    currentStage.place === 4 || currentStage.place === currWinner.place;

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
        <div className="relative flex flex-row justify-around text-center items-center  overflow-hidden bg-[url('./assets/podium.jpg')] bg-cover bg-bottom h-screen w-screen">
          {currentStage.place === 4 ? (
            [winners[1], winners[2], winners[0]].map((winner) => (
              <WinnerCard
                key={winner.place}
                stage={currentStage}
                winner={winner}
              />
            ))
          ) : (
            <AnimatePresence mode="wait">
              <WinnerCard
                key={currWinner.place}
                stage={currentStage}
                winner={currWinner}
              />
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}
