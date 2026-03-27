import { useState, useEffect } from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { stageEnum, stages, winners } from './const';
import { Podium } from './Podium';
import { WinnerCard } from './WinnerCard';

export default function FinalsReveal() {
  const [stage, setStage] = useState<'start' | 'third' | 'second' | 'first' | 'final'>('start');
  const [currWinner, setCurrWinner] = useState(winners[0]);


  // useEffect(() => {
  //   let timer: number;

  //   if (stage === 'third') {
  //     setCurrWinner(winners[0]);
  //     timer = window.setTimeout(() => setStage('second'), 800);
  //   } else if (stage === 'second') {
  //     setCurrWinner(winners[1]);
  //     timer = window.setTimeout(() => setStage('first'), 800);
  //   } else if (stage === 'first') {
  //     setCurrWinner(winners[2]);
  //     timer = window.setTimeout(() => setStage('final'), 1000);
  //   }

  //   return () => window.clearTimeout(timer);
  // }, [stage]);

  const nextStage = () => {
    if (stage === 'start') setStage('third');
  };

  return (

    <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_black,_transparent)]">
      {stage === 'start' && (
        <button
          onClick={nextStage}
          className="
   w-[17rem] h-[10rem]          /* מידות */
      flex items-center justify-center
    rounded-[65px]                          /* פינות מעוגלות */
    bg-black                                 /* רקע שחור */
    text-[#ff1100]                           /* צבע טקסט אדום זוהר */
    border-4 border-red-600                  /* גבול אדום ברור */
    shadow-2xl                                /* צל רגיל */
    font-[cursive] text-[50px]               /* גופן וגודל טקסט */
    hover:bg-gray-900                        /* רקע כהה בהובר */
    hover:shadow-[0_0_30px_#ff1100]         /* glow אדום בהובר */
    transition-all duration-300 ease-in-out  /* מעבר חלק */
    cursor-pointer
  "
        >
          <FaGooglePlay color='yellow' />
          <span className='ml-[5px]'>Start! </span>
        </button>
      )}

      {stage !== 'start' && stage !== 'final' && (
        <WinnerCard stage={stages[stage as keyof typeof stages]} winner={currWinner} />
      )}

      {stage === 'final' && <Podium winners={winners} />}
    </div>

  );
}