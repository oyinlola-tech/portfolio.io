import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#8f3db2] text-white p-3 rounded-sm hover:bg-[#7c349b] transition-all shadow-lg"
          aria-label="Scroll to top"
        >
          <span className="font-['Fira_Code'] text-lg leading-none" aria-hidden="true">
            ^
          </span>
        </button>
      )}
    </>
  );
}
