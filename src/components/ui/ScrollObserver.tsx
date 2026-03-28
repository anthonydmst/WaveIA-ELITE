"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // Force immediate visibility of all animated elements to debug the black blocks issue
    const forceVisible = () => {
      const elements = document.querySelectorAll(
        ".animate-in, .animate-in-left, .animate-in-right, .animate-in-up, .animate-in-down, .animate-scale-in, .animate-bar-grow"
      );
      elements.forEach(el => el.setAttribute("data-in-view", "true"));
    };

    // Run immediately and repeatedly to ensure no animations are left hidden
    forceVisible();
    const interval = setInterval(forceVisible, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
