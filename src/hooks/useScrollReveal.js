import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate'
        );

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 150;

            revealElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('revealed');
                }
            });
        };

        // Initial check
        revealOnScroll();

        // Add scroll listener
        window.addEventListener('scroll', revealOnScroll);

        return () => {
            window.removeEventListener('scroll', revealOnScroll);
        };
    }, []);
};

export default useScrollReveal;
