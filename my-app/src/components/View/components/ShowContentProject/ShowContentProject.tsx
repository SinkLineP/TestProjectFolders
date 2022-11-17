import React, {useState} from "react";
import "./Styles/index.scss";

interface ShowContentType {
  object: any[];
}

const ShowContentProject: React.FC<ShowContentType> = ({object}) => {
  const objectArray = object === undefined ? [{rowName: "error"}] : object;

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
      <>
        {
          objectArray.map((objectItem: any, index: number) => {
            if (objectItem.rowName !== "error") {
              return (
                <tr key={index} className={"project-input"}>
                  <td>level</td>
                  <td>{objectItem.rowName === null ? (<input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"} />) : objectItem.rowName}</td>
                  <td>{objectItem.salary === null ? (<input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"string"} />) : objectItem.salary}</td>
                  <td>{objectItem.equipmentCosts === null ? (<input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"string"} />) : objectItem.equipmentCosts}</td>
                  <td>{objectItem.overheads === null ? (<input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"string"} />) : objectItem.overheads}</td>
                  <td>{objectItem.estimatedProfit === null ? (<input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"string"} />) : objectItem.estimatedProfit}</td>
                </tr>
              )
            }
          })
        }
      </>
      </tbody>
    </table>
  )
}

export default ShowContentProject;