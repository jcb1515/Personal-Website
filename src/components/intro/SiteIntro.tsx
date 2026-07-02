"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { IntroScene } from "@/components/intro/IntroScene";

const introDurationMs = 6500;
const introStorageKey = "james-boutros-intro-seen";

export function SiteIntro(): ReactElement | null {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion() ?? false;
  const [isVisible, setIsVisible] = useState<boolean>(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(false);
      return;
    }
    if (window.sessionStorage.getItem(introStorageKey) === "true") {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    document.body.style.overflow = "hidden";
    const duration = reducedMotion ? 1200 : introDurationMs;
    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem(introStorageKey, "true");
      setIsVisible(false);
      document.body.style.overflow = "";
    }, duration);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [pathname, reducedMotion]);

  const dismissIntro = (): void => {
    window.sessionStorage.setItem(introStorageKey, "true");
    setIsVisible(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="site-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.65, ease: "easeInOut" }}
        >
          <IntroScene reducedMotion={reducedMotion} />
          <div className="intro-interface" aria-live="polite">
            <motion.div
              className="intro-lockup"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <span>JB / Signal established</span>
              <strong>James Boutros</strong>
              <p>Electrical engineering · embedded systems · software</p>
            </motion.div>
            <div className="intro-status">
              <span>Initialising portfolio environment</span>
              <div className="intro-progress">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reducedMotion ? 1 : 6.1, ease: "linear" }}
                />
              </div>
            </div>
          </div>
          <button type="button" className="intro-skip" onClick={dismissIntro}>
            Skip intro <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
