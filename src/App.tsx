import { useState, useEffect } from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { stages, winners } from "./const";
import { WinnerCard } from "./WinnerCard";
import { motion } from "framer-motion";

export default function FinalsReveal() {
  const [stage, setStage] = useState<
    "start" | "third" | "second" | "first" | "final"
  >("start");
  const [currWinner, setCurrWinner] = useState(winners[0]);

   useEffect(() => {
    let timer: number;

    if (stage === 'third') {
      setCurrWinner(winners[0]);
      timer = window.setTimeout(() => setStage('second'), 800);
    } else if (stage === 'second') {
      setCurrWinner(winners[1]);
      timer = window.setTimeout(() => setStage('first'), 800);
    } else if (stage === 'first') {
      setCurrWinner(winners[2]);
      timer = window.setTimeout(() => setStage('final'), 1000);
    }

    return () => window.clearTimeout(timer);
  }, [stage]);

  const nextStage = () => {
    if (stage === "start") setStage("third");
  };

  const currentStage = stages[stage as keyof typeof stages];

  return (
    <div className="h-screen flex items-center justify-center bg-[#ffc600]">
      {stage === "start" && (
        <motion.button
          onClick={nextStage}
          animate={{
            boxShadow: [
              "0 0 5px #ff1100",
              "0 0 20px #df1a0c",
              "0 0 40px #a31107",
              "0 0 20px #df1a0c",
              "0 0 5px #ff1100",
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
    text-[#ff1100]
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
            <FaGooglePlay color="yellow" />
            <span className="ml-[5px]">Start!</span>
          </motion.div>
        </motion.button>
      )}

      {currentStage.place === 4 ? (
          winners.map((winner) => (
            <WinnerCard
              key={winner.place}
              stage={currentStage}
              winner={winner}
            />
          ))
      ) : (
        <WinnerCard stage={currentStage} winner={currWinner} />
      )}
    </div>
  );
}
