import { useEffect, RefObject } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement | HTMLLinkElement | HTMLButtonElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        event.currentTarget &&
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, closeMenu]);
};
