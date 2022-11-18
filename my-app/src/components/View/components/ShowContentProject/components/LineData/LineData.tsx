import React from "react";
import EditorLine from "../EditorLine/EditorLine";


interface LineDataType {
  key: number;
  IterationItem: any;
  ImgSrc: any;
  ImageClassLevel: string;
  ImageAlt: string;
}

const LineData: React.FC<LineDataType> = ({key, IterationItem, ImgSrc, ImageClassLevel, ImageAlt}) => {

  return (
    <tr key={key} className={"project-input"}>
      <td><img className={ImageClassLevel} src={ImgSrc} alt={ImageAlt} /></td>
      <td><EditorLine item={IterationItem.rowName} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.salary} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.equipmentCosts} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.overheads} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.estimatedProfit} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"string"}/>} /></td>
    </tr>
  )
}

export default LineData;