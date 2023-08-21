import anime from "animejs";
import { useEffect } from "react";

export const NavbarAnimation = (logoRef: any) => {
  useEffect(() => {
    if (logoRef.current) {
      const element = logoRef.current;

      element.style.width = "0";
      element.style.height = "11%";

      anime({
        targets: element,
        width: "100%",
        height: "11%",
        duration: 2000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }
  }, []);
};

export const CartIconAnimation = (cartRef: any) => {
  useEffect(() => {
    if (cartRef.current) {
      const element = cartRef.current;

      element.style.opacity = "0";

      anime({
        targets: element,
        opacity: "100%",
        duration: 1000,
        delay: 2500,
        easing: "easeInOutQuad",
      });
    }
  }, []);
};

export const mobCartIconAnimation = (mobCartRef: any) => {
  useEffect(() => {
    if (mobCartRef.current) {
      const element = mobCartRef.current;

      element.style.opacity = "0";

      anime({
        targets: element,
        opacity: "100%",
        duration: 1000,
        delay: 2500,
        easing: "easeInOutQuad",
      });
    }
  }, []);
};

export const ShowMobileMenu = (menuRef: any, showMenu: any) => {
  useEffect(() => {
    if (showMenu && menuRef.current) {
      const divElement = menuRef.current;

      divElement.style.opacity = "0";

      anime({
        targets: divElement,
        opacity: "1",
        duration: 3000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    } else if (!showMenu && menuRef.current) {
      const divElement = menuRef.current;
      divElement.style.opacity = "1";
      anime({
        targets: divElement,
        opacity: "0",
        duration: 1000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }
  }, [showMenu]);
};

export const mobMenuNavbar = (logoRef: any, showMenu: any) => {
  useEffect(() => {
    if (showMenu && logoRef.current) {
      const element = logoRef.current;

      element.style.height = "11%";

      anime({
        targets: element,
        height: "70%",
        duration: 2000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    } else if (!showMenu && logoRef.current) {
      const element = logoRef.current;

      element.style.height = "60%";

      anime({
        targets: element,
        height: "11%",
        duration: 2000,
        easing: "easeInOutQuad",
      });
    }
  }, [showMenu]);
};
