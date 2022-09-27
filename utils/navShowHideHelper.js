import { useState, useEffect, useCallback, useContext } from "react";
import { Context } from "../Context";
import { debounce } from "./debounceHelper";

export default function useNavbarVisible() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { isMenuComponentVisible, setIsMenuComponentVisible } =
    useContext(Context);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    /*  Only apply when navbar is visible */
    /* last || -> if just a little scroll down, keep nav in place. */
    !isMenuComponentVisible &&
      setVisible(
        (prevState) =>
          (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 30) ||
          currentScrollPos < 10 ||
          (prevState && currentScrollPos - prevScrollPos < 100)
      );

    /* console.log("test debounce"); */
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

/* testing new value... */
/* previous: */
/* !isMenuComponentVisible &&
      setVisible(
        (prevState) =>
          (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 120) ||
          currentScrollPos < 10 ||
          (prevState && prevScrollPos - currentScrollPos > -100)
      ); */
