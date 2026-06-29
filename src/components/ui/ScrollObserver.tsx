"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const selector =
      ".animate-in, .animate-in-left, .animate-in-right, .animate-in-up, .animate-in-down, .animate-scale-in, .animate-bar-grow";

    const forceVisible = (root: ParentNode = document) => {
      const elements = root.querySelectorAll(selector);
      elements.forEach((el) => {
        if (el.getAttribute("data-in-view") !== "true") {
          el.setAttribute("data-in-view", "true");
        }
      });
    };

    // Run immediately on mount
    forceVisible();

    // Observe document mutations to handle client-side navigations and dynamic inserts without CPU polling
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            if (el.matches && el.matches(selector)) {
              el.setAttribute("data-in-view", "true");
            }
            forceVisible(el);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
