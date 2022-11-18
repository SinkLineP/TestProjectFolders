import React, {useEffect, useState} from "react";
import "./Styles/index.scss";
import FolderLevelOne from "./icons/folder_one.svg";
import FolderLevelTwo from "./icons/folder_two.svg";
import FileImage from "./icons/File.svg";
import LineData from "./components/LineData/LineData";
import EditorDataLine from "./components/EditorDataLine/EditorDataLine";
interface ShowContentType {
  object: any[];
}

const ShowContentProject: React.FC<ShowContentType> = ({object}) => {

  const edit: any = (obj: any) => {
    return (
      <EditorDataLine item={obj} ImageClassLevel={"icon-level"} ImgSrc={FolderLevelOne} ImageAlt={"Folder Level 1"} />
    )
  }

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
          object.length !== 0 ? object.map((objectItem: any, index: number) => {
            if (objectItem !== undefined && objectItem.id !== null) {
              if (objectItem.child[0] !== null) {
                return (
                  <>
                    {/*Level 1*/}
                    <LineData key={objectItem.id} IterationItem={objectItem} ImgSrc={FolderLevelOne} ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 1"} Level={1} />
                    {
                      objectItem.child.map((childItem: any, indexChild: number) => {
                        if (childItem.child !== null) {
                          return (
                            <>
                              {/*Level 2*/}
                              <LineData key={childItem.id} IterationItem={childItem} ImgSrc={FolderLevelTwo} DivClassLevel={"into"} ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 2"} Level={2} />
                              {
                                childItem.child.map((FileItem: any, indexFile: number) => {
                                  if (FileItem.child !== null) {
                                    return (
                                      <>
                                        {/*<File>*/}
                                        <LineData key={FileItem.id} IterationItem={FileItem} ImgSrc={FileImage} DivClassLevel={"into-child"} ImageClassLevel={"icon-level"} ImageAlt={"File"} Level={3} />
                                      </>
                                    )
                                  }
                                })
                              }
                            </>
                          )
                        } else {
                          return (
                            <LineData key={childItem.id} IterationItem={childItem} ImgSrc={FolderLevelTwo} DivClassLevel={"into"} ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 2"} Level={2} />
                          )
                        }
                      })
                    }
                  </>
                )
              } else {
                return (
                  <LineData key={objectItem.id} IterationItem={objectItem} ImgSrc={FolderLevelOne}  ImageClassLevel={"icon-level"} ImageAlt={"Folder Level 1"} Level={1} />
                )
              }
            }
          }) : edit(object)
          }
      </>
      </tbody>
    </table>
  )
}

export default ShowContentProject;