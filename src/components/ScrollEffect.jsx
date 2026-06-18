// src/components/ScrollEffect.jsx
import { useEffect } from "react";

export default function ScrollEffect() {
  useEffect(() => {
    const zSpacing = -1000; // Increased for more dramatic effect
    const panels = document.querySelectorAll(".panel");
    let zVals = [];

    // Set initial positions - panels start further back
    panels.forEach((panel, i) => {
      zVals[i] = (i * zSpacing) - 2000; // Start further back
      panel.style.transform = `translateZ(${zVals[i]}px)`;
      panel.style.opacity = '0';
    });

    let lastScrollTop = 0;
    let ticking = false;

    const updatePanels = () => {
      const scrollTop = document.documentElement.scrollTop;
      const delta = scrollTop - lastScrollTop;
      
      panels.forEach((panel, i) => {
        // Move panels forward as user scrolls down
        if (delta > 0) { // Scrolling down
          zVals[i] += delta * 5; // Move forward (increase z value)
        } else { // Scrolling up
          zVals[i] += delta * 3; // Move backward (decrease z value)
        }

        // Calculate opacity based on z-position
        const opacity = Math.min(1, Math.max(0, 
          (zVals[i] + Math.abs(zSpacing * 2)) / (Math.abs(zSpacing) * 0.5)
        ));

        // Apply transforms with perspective
        panel.style.transform = `translateZ(${zVals[i]}px)`;
        panel.style.opacity = opacity;
        
        // Add scale effect for more cinematic feel
        const scale = 0.8 + (opacity * 0.2);
        panel.style.transform = `translateZ(${zVals[i]}px) scale(${scale})`;
      });

      lastScrollTop = scrollTop;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePanels);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial update
    updatePanels();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}