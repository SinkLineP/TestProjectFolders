import React from "react";
import "./Styles/index.scss";

interface ShowContentType {
  object: any | null;
}

const ShowContentProject: React.FC<ShowContentType> = ({object}) => {


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
          <tr className={"project-input"}>
            <td>{object.level === null ? 1 : object.level}</td>
            <td>{object.rowName === null ? (<input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"} />) : object.rowName}</td>
            <td>{object.salary === null ? (<input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"string"} />) : object.salary}</td>
            <td>{object.equipmentCosts === null ? (<input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"string"} />) : object.equipmentCosts}</td>
            <td>{object.overheads === null ? (<input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"string"} />) : object.overheads}</td>
            <td>{object.estimatedProfit === null ? (<input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"string"} />) : object.estimatedProfit}</td>
          </tr>
      </tbody>
    </table>
  )

}

export default ShowContentProject;