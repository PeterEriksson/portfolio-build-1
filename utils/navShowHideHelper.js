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

    /* last || -> if just a little scroll down, keep nav in place. Only apply when navbar is visible */
    /* testing new feat. only do the following IF !isMenuComponentVisible. works ok? */
    !isMenuComponentVisible &&
      setVisible(
        (prevState) =>
          (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 120) ||
          currentScrollPos < 10 ||
          (prevState && prevScrollPos - currentScrollPos > -100)
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
