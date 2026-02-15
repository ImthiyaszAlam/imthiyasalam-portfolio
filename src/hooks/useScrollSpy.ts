import { useEffect } from "react";

export function useScrollSpy(
  sectionRefs: Record<string, React.RefObject<HTMLElement>>,
  setActive: (id: string) => void,
) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current: string = "home";
      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, setActive]);
}
