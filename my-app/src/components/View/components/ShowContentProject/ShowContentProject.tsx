import React from "react";
import "./Styles/index.scss";

interface ShowContentType {
  array: any | null;
}

const ShowContentProject: React.FC<ShowContentType> = ({array}) => {

  return (
    <table className={"table-show-content"}>
      <tbody>
        <tr className={"table-projects"}>
          <td className={"level"}>Уровень</td>
          <td className={"rowName"}>Наименование работ</td>
          <td className={"salary"}>Основная з/п</td>
          <td className={"equipmentCosts"}>Оборудование</td>
          <td className={"overheads"}>Накладные расходы</td>
          <td className={"estimatedProfit"}>Сметная прибыль</td>
        </tr>
        {
          array.map((item: any) => {
            return (
              <tr className={"project-input"}>
                <td>{item.level}</td>
                <td>{item.rowName}</td>
                <td>{item.salary}</td>
                <td>{item.equipmentCosts}</td>
                <td>{item.overheads}</td>
                <td>{item.estimatedProfit}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )

}

export default ShowContentProject;