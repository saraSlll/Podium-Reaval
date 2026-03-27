import type { Winner } from "./types";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface WinnerProps {
    winners: Winner[]
}

export const Podium = ({ winners }: WinnerProps) => {
      const { width, height } = useWindowSize(); // for confetti

    return (

        <div className="flex items-end space-x-4 mt-8 relative">
            {/* Confetti */}
            <Confetti width={width} height={height} recycle={false} numberOfPieces={1000} />

            {/* 2nd */}
            <div className={`rounded-lg p-6 w-40 bg-[#CD7F32] text-white font-bold shadow-lg`}>
                🥈 {winners[1].name}
            </div>

            {/* 1st */}
            <div className={`rounded-lg p-6 w-48 bg-[#C0C0C0] text-white font-bold shadow-2xl`}>
                🏆{winners[2].name}
            </div>

            {/* 3rd */}
            <div className={`rounded-lg p-6 w-36 bg-[#FFD700] text-white font-bold shadow-md`}>
                🥉 {winners[0].name}
            </div>
        </div>

    );
}