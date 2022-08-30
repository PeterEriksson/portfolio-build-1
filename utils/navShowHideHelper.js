import { useState, useEffect, useCallback } from "react";
import { debounce } from "./debounceHelper";

export default function useNavbarVisible() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    /* last || -> if just a little scroll down, keep nav in place. Only apply when navbar is visible */
    setVisible(
      (prevState) =>
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 120) ||
        currentScrollPos < 10 ||
        (prevState && prevScrollPos - currentScrollPos > -100)
    );

    /* setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 120) ||
        currentScrollPos < 10 ||
        prevScrollPos - currentScrollPos > -100
    ); */
    console.log("test debounce");
    setPrevScrollPos(currentScrollPos);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return {
    visible,
  };
}
