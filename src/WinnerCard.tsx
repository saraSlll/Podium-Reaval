import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import type { Winner } from "./types";
import WinnerCap from "./assets/winnerCap.svg";

interface WinnerCardProps {
  stage: { color: string; icon: string; place: number };
  winner: Winner;
}

export const WinnerCard = ({ stage, winner }: WinnerCardProps) => {
  const { width, height } = useWindowSize();

  const shouldRender =
    stage.place === 4 || stage.place === winner.place;

  if (!shouldRender) return null;

  return (
    <div className="relative flex flex-row items-center justify-center overflow-hidden bg-[black] h-screen w-screen">
          {/* <Confetti
            width={width}
            height={height}
            recycle={true}
            numberOfPieces={1000 / winner.place}
          /> */}
          <AnimatePresence>
            <motion.div
              key={winner.place}
              // className={`rounded-lg p-6 w-[25rem] h-[10rem] rounded-t-[130px] ${stage.color} text-white font-bold shadow-2xl z-10`}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.05, 1], // subtle pulsing
              }}  
            >
              <span className="text-[#ff0011] text-[57px] left-[49%] top-[-13px] font-[cursive] relative">
                {winner.place}
              </span>
              <div className="flex flex-col items-center h-full font-[mono]">
                <span className="text-[40px] font-[mono]">{winner.name}</span>
                <span className="mt-[20px] text-[25px]">
                  {winner.score} Points
                </span>
              </div>
                <img src={WinnerCap} alt="Winner Cap" className="absolute top-[-50px] w-[80px] left-[calc(50%-40px)]" />
            </motion.div>
          </AnimatePresence>
    </div>
  );
};
