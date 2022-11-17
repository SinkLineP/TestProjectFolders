import React from "react";
import "./Styles/index.scss";

interface ButtonNavbarType {
  idBtn: string;
  setCurrentBtn: any;
  content: string;
  activeClass: string;
}

const ButtonNavbar: React.FC<ButtonNavbarType> = ({idBtn, setCurrentBtn, content, activeClass}) => {
  const classBtn = "btn-navbar";
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