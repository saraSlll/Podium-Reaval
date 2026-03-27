# Code Citations

## License: MIT
https://github.com/thecodingmachine/react-native-boilerplate/blob/1cb09338d0354e227f3463670d5f1d3e0fbd4624/documentation/tailwind.config.js

```
I can help you add a background animation with black colors to your main screen. Here's an updated version of your App.tsx with a CSS animation:

````tsx
// filepath: c:\Users\Lenovo\Documents\dev\neoja\my-react-app\src\App.tsx
import { useState, useEffect } from 'react';
import { stageEnum, stages, winners } from './const';
import { Podium } from './Podium';
import { WinnerCard } from './WinnerCard';

export default function FinalsReveal() {
  const [stage, setStage] = useState<'start' | 'third' | 'second' | 'first' | 'final'>('start');
  const [currWinner, setCurrWinner] = useState(winners[0]);

  // useEffect שמתקדם אוטומטית
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

    return () => window.clearTimeout(timer); // ניקוי Timeout
  }, [stage]);

  const nextStage = () => {
    if (stage === 'start') setStage('third');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {stage === 'start' && (
          <button
            className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-bold hover:bg-blue-500 transition"
            onClick={nextStage}
          >
            Reveal Winners
          </button>
        )}

        {stage !== 'start' && stage !== 'final' && (
          <WinnerCard stage={stages[stage as keyof typeof stages]} winner={currWinner} />
        )}

        {stage === 'final' && <Podium winners={winners} />}
      </div>
    </div>
  );
}
````

Now add this to your **tailwind.config.js** (or **tailwind.config.ts**) to define the blob animation:

````javascript
// filepath: c:\Users\Lenovo\Documents\dev\neoja\my-react-app\tailwind.config.js
module.exports = {
  // ...existing code...
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
      },
    },
  },
  // ...existing code...
};
````

Add this CSS class to your global styles (**globals.css** or **index.css**):

````css
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

