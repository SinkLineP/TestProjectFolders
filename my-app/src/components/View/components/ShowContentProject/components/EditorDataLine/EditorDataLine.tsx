import React from "react";


interface EditorDataLineType {
  item: any;
  ImageClassLevel: string;
  ImgSrc: any;
  ImageAlt: string;
}

const EditorDataLine: React.FC<EditorDataLineType> = ({item, ImageClassLevel, ImgSrc, ImageAlt}) => {

  return (
    <tr className={"project-input"}>
      <td><img className={ImageClassLevel} src={ImgSrc} alt={ImageAlt} /></td>
      <td><input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"}/></td>
      <td><input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"string"}/></td>
      <td><input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"string"} /></td>
      <td><input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"string"}/></td>
      <td><input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"string"} /></td>
    </tr>
  )
}


export default EditorDataLine;