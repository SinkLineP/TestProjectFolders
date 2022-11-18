import React from "react";
import EditorLine from "../EditorLine/EditorLine";
import FolderLevelOne from "../../icons/folder_one.svg";
import FolderLevelTwo from "../../icons/folder_two.svg";
import FileImage from "../../icons/File.svg";
import DeleteIcon from "../../icons/delete.svg"
import "./styles/index.scss";


interface LineDataType {
  keyIndex?: any;
  IterationItem: any;
  ImgSrc?: any;
  DivClassLevel?: string;
  ImageClassLevel: string;
  ImageAlt: string;
  Level: number;
}

const LineData: React.FC<LineDataType> = ({keyIndex, IterationItem, ImgSrc, DivClassLevel, ImageClassLevel, ImageAlt, Level}) => {
  const LevelOne = [FolderLevelOne, FolderLevelTwo, FileImage, DeleteIcon];
  const LevelTwo = [FolderLevelTwo, FileImage, DeleteIcon];
  const LevelThree = [FileImage, DeleteIcon];

  return (
    <tr key={keyIndex} className={"project-input"}>
      <td className={"holder-buttons"}>
        <div className={DivClassLevel}>
          <>
            {
              Level === 1 ? LevelOne.map((item) => {
                return (
                  <button className={"button-folder"}><img className={ImageClassLevel} src={item} alt={"item"} /></button>
                )
              }) : ""
            }
          </>
          <>
            {
              Level === 2 ? LevelTwo.map((item) => {
                return (
                  <button className={"button-folder"}><img className={ImageClassLevel} src={item} alt={"item"} /></button>
                )
              }) : ""
            }
          </>
          <>
            {
              Level === 3 ? LevelThree.map((item) => {
                return (
                  <button className={"button-folder"}><img className={ImageClassLevel} src={item} alt={"item"} /></button>
                )
              }) : ""
            }
          </>
        </div>
      </td>
      <td><EditorLine item={IterationItem.rowName} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.salary} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.equipmentCosts} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.overheads} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"string"}/>} /></td>
      <td><EditorLine item={IterationItem.estimatedProfit} itemEqualsValue={null} input={<input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"string"}/>} /></td>
    </tr>
  )
}

export default LineData;