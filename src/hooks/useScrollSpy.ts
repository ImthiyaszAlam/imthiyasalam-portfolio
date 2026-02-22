
export function useScrollSpy(
  sectionRefs: Record<string, React.RefObject<HTMLElement>>,
  setActive: (id: string) => void,
) {
  // Disable scroll spy highlight logic. Menu highlight is now based only on last clicked item.
}
