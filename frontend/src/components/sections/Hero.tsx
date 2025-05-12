import { useState, useEffect } from 'react';

const Hero = () => {
  // Words to cycle through
  const words = ['technology', 'software', 'websites', 'databases', 'webapps', 'AI solutions'];
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Find the longest word to set the width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');
  // The longest word is "AI solutions" with 12 characters

  // Animation timing
  const typingSpeed = 100; // ms per character when typing
  const deletingSpeed = 50; // ms per character when deleting
  const pauseTime = 1500; // ms to pause at complete word

  // Custom typing animation
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isWaiting) {
      // Pause at complete word
      timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      // Deleting animation
      if (displayText === '') {
        // Move to next word when deletion is complete
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Delete one character
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      // Typing animation
      const currentWord = words[wordIndex];
      if (displayText === currentWord) {
        // Word is complete, start waiting
        setIsWaiting(true);
      } else {
        // Type one character
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isWaiting, wordIndex, words]);

  return (
    <section className="relative pt-[100px] pb-24 overflow-hidden bg-white">
      {/* Decorative Elements - subtle in white background */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary opacity-3 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent opacity-3 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-medium mb-4 text-dark leading-tight font-inter">
              <span className="text-primary">Innovation</span> Without Limits
            </h1>
            <h2 className="text-base md:text-base font-normal mb-6 text-neutral max-w-xl font-inter">
              We build and support the{' '}
              <span
                className="text-accent"
                style={{
                  display: 'inline-block',
                  minWidth: `${longestWord.length * 6.5}px`, /* Reduced from 8px to 6.5px per character */
                  textAlign: 'left'
                }}
              >
                {displayText}
              </span>
              <span className="ml-[3px]">that keeps</span> you working smarter, growing faster, and staying ahead.
            </h2>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Abstract Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-card p-6 border border-gray-100 lg:-mt-16">
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary flex items-center justify-center">
                {/* Abstract Geometric Shapes */}
                <div className="absolute w-40 h-40 bg-primary/10 rounded-full top-1/4 left-1/4 blur-md"></div>
                <div className="absolute w-32 h-32 bg-accent/10 rounded-full bottom-1/4 right-1/4 blur-md"></div>

                {/* Floating Elements */}
                <div className="absolute w-16 h-16 bg-white rounded-lg shadow-lg top-10 left-10 rotate-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="absolute w-20 h-20 bg-white rounded-lg shadow-lg bottom-12 left-20 -rotate-12 flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>

                <div className="absolute w-16 h-16 bg-white rounded-lg shadow-lg top-16 right-12 rotate-45 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <div className="absolute w-20 h-20 bg-white rounded-lg shadow-lg bottom-16 right-16 -rotate-12 flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>

                {/* Center Element */}
                <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="2" />
                  <line x1="70%" y1="30%" x2="50%" y2="50%" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="2" />
                  <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="2" />
                  <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="2" />
                </svg>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-dark">Integrated Technology Solutions</h3>
                <p className="text-sm text-neutral">Seamlessly connecting your business systems</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
