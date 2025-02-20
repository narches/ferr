'use client';

import { useState } from 'react';

export default function Home() {
  const [feed, setFeed] = useState<string>('');
  const [gain, setGain] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feedValue = parseFloat(feed);
    const gainValue = parseFloat(gain);
    
    if (!isNaN(feedValue) && !isNaN(gainValue) && gainValue !== 0) {
      const fer = feedValue / gainValue;
      setResult(fer.toFixed(2));
    } else {
      setResult('Invalid Input');
    }
  };
  

  return (
    <div className="relative flex flex-col justify-between h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="z-0 absolute inset-0 brightness-75 w-full h-full object-cover"
      >
        <source src="/bkg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* FER Calculator */}
      <div className="z-10 flex flex-col justify-center items-center h-full">
        <div className="bg-white bg-opacity-80 shadow-lg p-8 rounded-lg w-full max-w-md">
          <h1 className="mb-6 font-bold text-green-700 text-2xl text-center">
            FER Calculator
          </h1>
          <form onSubmit={handleCalculate}>
            <div className="mb-4">
              <label className="block mb-1 text-green-600">
                Total Feed Intake (kg):
              </label>
              <input
                type="number"
                value={feed}
                onChange={(e) => setFeed(e.target.value)}
                placeholder="Enter feed intake"
                required
                className="p-2 border border-gray-300 rounded w-full text-green-600"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-green-600">
                Total Weight Gain (kg):
              </label>
              <input
                type="number"
                value={gain}
                onChange={(e) => setGain(e.target.value)}
                placeholder="Enter weight gain"
                required
                className="p-2 border border-gray-300 rounded w-full text-green-600"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 py-2 rounded w-full text-white transition-colors"
            >
              Calculate FER
            </button>
          </form>
          {result && (
            <div className="mt-6 text-center">
              <h2 className="font-semibold text-green-400 text-xl">
                Feed Efficiency Ratio:{' '}
                <span className="text-green-800">{result}</span>
              </h2>
            </div>
          )}
        </div>
         {/* Copyright Footer */}
          <footer className="text-gray-300 text-center">
            © {new Date().getFullYear()} Joseph Nnachi.
          </footer>
      </div>
    </div>
  );
}
