// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = ({ 
  ref, 
  animationClass = 'animate-cinematic', 
  contentClass = 'content-animate',
  threshold = 0.1,
  staggerDelay = 200 
}) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add main animation to container
            element.classList.add(animationClass);
            
            // Stagger animations for children
            const animatedChildren = element.querySelectorAll('[data-stagger]');
            animatedChildren.forEach((child, index) => {
              const delay = child.getAttribute('data-stagger-delay') || index * staggerDelay;
              child.style.animationDelay = `${delay}ms`;
              child.classList.add(contentClass);
            });
          } else {
            // Reset when out of view
            element.classList.remove(animationClass);
            element.querySelectorAll('[data-stagger]').forEach(child => {
              child.classList.remove(contentClass);
            });
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, animationClass, contentClass, threshold, staggerDelay]);
};

export default useScrollAnimation;