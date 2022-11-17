import React, {useState} from "react";
import ButtonNavbar from "../Buttons/ButtonNavbar/ButtonNavbar";
import "./styles/index.scss";
import arrowDown from "./icons/arrowDown.svg";


function View() {
  const [currentBtn, setCurrentBtn] = useState<{id: string, class: string}>({
    id: "",
    class: "",
  });

  return (
    <div className={"show-content"}>
      <table className={"table"}>
        <tbody>
          <tr className={"table-navbar"}>
            <td className={"table-navbar-buttons"} colSpan={2}>
              <ButtonNavbar idBtn={"menu"} content={"Menu"} setCurrentBtn={setCurrentBtn} activeClass={currentBtn.id === "menu" ? currentBtn.class + " btn-active" : ""}/>
              <ButtonNavbar idBtn={"back"} content={"Back"} setCurrentBtn={setCurrentBtn} activeClass={currentBtn.id === "back" ? currentBtn.class + " btn-active" : ""}/>
              <ButtonNavbar idBtn={"show"} content={"Просмотр"} setCurrentBtn={setCurrentBtn} activeClass={currentBtn.id === "show" ? currentBtn.class + " btn-active" : ""}/>
              <ButtonNavbar idBtn={"turn"} content={"Управление"} setCurrentBtn={setCurrentBtn} activeClass={currentBtn.id === "turn" ? currentBtn.class + " btn-active" : ""}/>
            </td>
          </tr>
          <tr className={"table-titles"}>
            <td className={"table-name-or-sorting"}>
              <div className="flex-container">
                <div className="item1">
                  <p className={"name-project"}>Название проекта</p>
                  <p className={"abbrev"}>Аббревиатура</p>
                </div>
                <div className="item2">
                  <button className={"btn-open"}>
                    <img src={arrowDown} alt={"arrow-down"}/>
                  </button>
                </div>
              </div>
            </td>
            <td className={"table-name-project"}></td>
          </tr>
          <tr className={"table-content"}>
            <td className={"table-list-projects"}></td>
            <td className={"table-structure-folder"}></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default View;