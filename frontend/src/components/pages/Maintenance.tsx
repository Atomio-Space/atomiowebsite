import { useState, useEffect } from 'react';
import Tetris from 'react-tetris';
import './Maintenance.css';

const Maintenance = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the launch date to 7 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 gradient-animation flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-accent p-1"></div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img
                src="/images/logobanner.png"
                alt="Atomio Technologies"
                className="h-12 mb-6"
              />

              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                We're Upgrading Our Website
              </h1>

              <p className="text-neutral mb-6">
                We're working on something awesome! Our website is currently undergoing scheduled maintenance,
                but we'll be back with a fresh new look and improved features.
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-secondary/10 rounded-lg p-3 text-center pulse-animation">
                  <div className="text-2xl font-bold text-primary">{countdown.days}</div>
                  <div className="text-xs text-neutral">Days</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3 text-center pulse-animation" style={{ animationDelay: '0.25s' }}>
                  <div className="text-2xl font-bold text-primary">{countdown.hours}</div>
                  <div className="text-xs text-neutral">Hours</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3 text-center pulse-animation" style={{ animationDelay: '0.5s' }}>
                  <div className="text-2xl font-bold text-primary">{countdown.minutes}</div>
                  <div className="text-xs text-neutral">Minutes</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3 text-center pulse-animation" style={{ animationDelay: '0.75s' }}>
                  <div className="text-2xl font-bold text-primary">{countdown.seconds}</div>
                  <div className="text-xs text-neutral">Seconds</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="mailto:info@atomio.tech" className="text-primary hover:text-primary-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </a>
                <a href="https://twitter.com/atomiotech" className="text-primary hover:text-primary-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.9 14.31C4.42 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/atomiotech" className="text-primary hover:text-primary-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 bg-white rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold text-dark mb-4 text-center">Play Tetris While You Wait</h2>

              <div className="tetris-container float-animation" style={{ height: '400px', maxWidth: '300px', margin: '0 auto' }}>
                <Tetris>
                  {({ Gameboard, points, linesCleared, state, controller }) => (
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex justify-between w-full">
                        <div className="text-sm">
                          <p className="font-medium">Points: <span className="text-primary">{points}</span></p>
                          <p className="font-medium">Lines: <span className="text-primary">{linesCleared}</span></p>
                        </div>
                        {state === 'PAUSED' && (
                          <button
                            onClick={controller.resume}
                            className="px-2 py-1 bg-primary text-white text-xs rounded"
                          >
                            Resume
                          </button>
                        )}
                        {state === 'PLAYING' && (
                          <button
                            onClick={controller.pause}
                            className="px-2 py-1 bg-neutral text-white text-xs rounded"
                          >
                            Pause
                          </button>
                        )}
                      </div>

                      <div className="border border-gray-200 rounded">
                        <Gameboard />
                      </div>

                      {state === 'LOST' && (
                        <div className="mt-4 text-center">
                          <p className="text-neutral mb-2">Game Over!</p>
                          <button
                            onClick={controller.restart}
                            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                          >
                            Play Again
                          </button>
                        </div>
                      )}

                      <div className="mt-4 text-xs text-neutral text-center">
                        <p>Controls: Arrow keys to move, Up to rotate, Space to drop</p>
                      </div>
                    </div>
                  )}
                </Tetris>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-neutral">
            <p>© {new Date().getFullYear()} Atomio Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
