import React from "react";
import "./UpArrow.css";

export const UpArrow = () => {
  $(document).ready(function () {
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".ir-arriba").slideDown(200);
      } else {
        $(".ir-arriba").slideUp(200);
      }
    });
  });

  return (
    <>
        <a href="#"><span className="ir-arriba fa-solid fa-arrow-up"></span></a>
    </>
  );
};
