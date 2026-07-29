import { useState, useEffect } from 'react';

export default function useScrollSpy() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return active;
}
