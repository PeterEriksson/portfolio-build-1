/* https://stackoverflow.com/questions/32553158/detect-click-outside-react-component */
/* You can create a reusable hook called useComponentVisible. */

import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../Context";

export default function useComponentVisible(/* initialIsVisible */) {
  /* const [isMenuComponentVisible, setIsMenuComponentVisible] =
    useState(initialIsVisible); */
  const { isMenuComponentVisible, setIsMenuComponentVisible } =
    useContext(Context);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    /* in Navigation, we give the parent div of MENU-CONTAINER ref={ref} */
    if (ref.current && !ref.current.contains(event.target)) {
      /* menu is now active .. -> */
      /* if click equals the cross or nav then return. We are already handling that + we dont want to close the menu is user accidently clicks up top*/
      /* console.log(event.target.tagName.toLowerCase()); */
      if (event.target.tagName.toLowerCase() === "section") return;
      if (event.target.tagName.toLowerCase() === "nav") return;

      setIsMenuComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return {
    ref,
    isMenuComponentVisible,
    setIsMenuComponentVisible,
  };
}
