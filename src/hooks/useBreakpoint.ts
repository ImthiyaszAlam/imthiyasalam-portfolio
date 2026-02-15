import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export type Breakpoint = "mobile" | "tablet" | "desktop";

const MOBILE_MAX = 767;
const TABLET_MAX = 1023;

function getBreakpoint(width: number): Breakpoint {
  if (width <= MOBILE_MAX) return "mobile";
  if (width <= TABLET_MAX) return "tablet";
  return "desktop";
}

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(Dimensions.get("window").width),
  );

  useEffect(() => {
    const onChange = ({ window }: { window: { width: number } }) => {
      setBreakpoint(getBreakpoint(window.width));
    };
    const sub = Dimensions.addEventListener("change", onChange);
    return () => {
      if (typeof sub?.remove === "function") sub.remove();
      // For React Native < 0.65
      // @ts-ignore
      if (typeof Dimensions.removeEventListener === "function") {
        // @ts-ignore
        Dimensions.removeEventListener("change", onChange);
      }
    };
  }, []);

  return breakpoint;
}
