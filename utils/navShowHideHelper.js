/* https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js */

/* performance! use some sort of useCallback. debounce... */

/* usefule info: https://www.devtwins.com/blog/sticky-navbar-hides-scroll */

/* import { debounce } from "lodash"; uninstalled... */
/* import { useState, useEffect, useCallback } from "react";

export default function useNavbarVisible() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(10000); //set high Number, -> initial show is true */

/* const controlNavbar = () => {
    if (typeof window == "undefined") return;
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);

    // performance... issue ...use debounce (npm i lodash) ?
    console.log("test");
    console.log(lastScrollY, window.scrollY);
  }; */

/* const controlNavbar = useCallback(
    debounce((t) => {
      const curr = window.scrollY;
      if (typeof window == "undefined") return;
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(curr);

      /* console.log(t.path[1].pageYOffset); */

// performance... issue ...use debounce (npm i lodash) ?
//console.log("test");
//console.log(lastScrollY, window.scrollY); */
/* }, 100),[]); */

/* useEffect(() => {
    if (typeof window == "undefined") return;

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return {
    show,
  }; */
//}
