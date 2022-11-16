import React from "react";
import "./styles/index.scss";

function View() {

  return (
    <div className={"show-content"}>
      <table className={"table"}>
        <tbody>
          <tr className={"table-navbar"}>
            <td className={"table-navbar-buttons"} colSpan={2}></td>
          </tr>
          <tr className={"table-titles"}>
            <td className={"table-name-or-sorting"}></td>
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