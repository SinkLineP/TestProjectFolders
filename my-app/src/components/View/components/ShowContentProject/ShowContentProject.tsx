import React, {useState} from "react";
import "./Styles/index.scss";
import FolderLevelOne from "./icons/folder_one.svg";
import FolderLevelTwo from "./icons/folder_two.svg";
import FileImage from "./icons/File.svg";
import LineData from "./components/LineData/LineData";
interface ShowContentType {
  object: any[];
}

const ShowContentProject: React.FC<ShowContentType> = ({object}) => {
  const objectArray = object === undefined ? [{rowName: "error"}] : object;

  return (
    <table className={"table-show-content"}>
      <tbody>
      <tr className={"table-head"}>
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
              if (objectItem.child[0] !== null) {
                return (
                  <>
                    {/*Level 1*/}
                    <LineData key={index} IterationItem={objectItem} ImgSrc={FolderLevelOne} ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 1"} />
                    {
                      objectItem.child.map((childItem: any, indexChild: number) => {
                        if (childItem.child !== null) {
                          return (
                            <>
                              <LineData key={indexChild} IterationItem={childItem} ImgSrc={FolderLevelTwo} ImageClassLevel={"icon-level into"} ImageAlt={"Folder Level 2"} />
                              {
                                childItem.child.map((FileItem: any, indexFile: number) => {
                                  if (FileItem.child !== null) {
                                    return (
                                      <LineData key={indexFile} IterationItem={FileItem} ImgSrc={FileImage} ImageClassLevel={"icon-level into-child"} ImageAlt={"File"} />
                                    )
                                  }
                                })
                              }
                            </>
                          )
                        } else {
                          return (
                            <LineData key={indexChild + 1} IterationItem={childItem} ImgSrc={FolderLevelTwo} ImageClassLevel={"icon-level into"} ImageAlt={"Folder Level 2"} />
                          )
                        }
                      })
                    }
                  </>
                )
              } else {
                return (
                  <LineData key={index + 1} IterationItem={objectItem} ImgSrc={FolderLevelOne}  ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 1"} />
                )
              }
            }
          })
        }
      </>
      </tbody>
    </table>
  )
}

export default ShowContentProject;