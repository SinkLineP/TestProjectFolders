import React from "react";
import "./Styles/index.scss";

interface ButtonNavbarType {
  idBtn: string;
  setCurrentBtn: any;
  content: string;
  activeClass: string;
}

const ButtonNavbar: React.FC<ButtonNavbarType> = ({idBtn, setCurrentBtn, content, activeClass}) => {
  let classBtn = "btn-navbar";
  console.log(activeClass);
  return (
    <button id={idBtn} className={activeClass !== "" ? activeClass : classBtn} onClick={() => setCurrentBtn({
      id: idBtn,
      class: classBtn,
    })}>
      {content}
    </button>
  )
}

export default ButtonNavbar;