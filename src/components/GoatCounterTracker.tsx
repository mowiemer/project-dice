import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars?: {
        path?: string;
        title?: string;
        referrer?: string;
        event?: boolean;
      }) => void;
    };
  }
}

export default function GoatCounterTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.goatcounter?.count) return;

    window.goatcounter.count({
      path: location.pathname + location.search + location.hash,
      title: document.title,
    });
  }, [location]);

  return null;
}