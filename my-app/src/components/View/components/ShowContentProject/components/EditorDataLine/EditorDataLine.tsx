import React, {useState} from "react";
import {createRowEntityAPI} from "../../../../../../models/api";


interface EditorDataLineType {
  item: any;
  ImageClassLevel: string;
  ImgSrc: any;
  ImageAlt: string;
  IDEntity: number;
  setTree: any;
}

const EditorDataLine: React.FC<EditorDataLineType> = ({setTree, IDEntity, item, ImageClassLevel, ImgSrc, ImageAlt}) => {
  const [rowName, setRowName] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);
  const [equipmentCosts, setEquipmentCosts] = useState<number>(0);
  const [overheads, setOverheads] = useState<number>(0);
  const [estimatedProfit, setEstimatedProfit] = useState<number>(0);

  const saveValue: any = (rowName: string, salary: number, equipmentCosts: number, overheads: number, estimatedProfit: number, IDEntity: number) => {
    createRowEntityAPI(IDEntity, {
      rowName: rowName,
      salary: salary,
      equipmentCosts: equipmentCosts,
      overheads: overheads,
      estimatedProfit: estimatedProfit,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      parentId: null,
      supportCosts: 0,
    }).then(r => {
      if (r.current.id !== 0) {
        const newTree: any[] = [];
        const {
          equipmentCosts,
          estimatedProfit,
          id,
          machineOperatorSalary,
          mainCosts,
          materials,
          mimExploitation,
          overheads,
          rowName,
          salary,
          supportCosts,
          total,
        } = r.current;
        newTree.push({
          equipmentCosts,
          estimatedProfit,
          id: id,
          machineOperatorSalary: machineOperatorSalary,
          mainCosts: mainCosts,
          materials: materials,
          mimExploitation: mimExploitation,
          overheads: overheads,
          rowName: rowName,
          salary: salary,
          supportCosts: supportCosts,
          total: total,
          child: [null],
          level: item.level,
        });
        setTree(newTree);
      }
    });
  }

  return (
    <tr className={"project-input"}>
      <td><img className={ImageClassLevel} src={ImgSrc} alt={ImageAlt} /></td>
      <td><input className={"input-edit"} placeholder={"Введите наименование.."} type={"string"} onChange={(e) => setRowName(e.target.value)}/></td>
      <td><input className={"input-edit"} placeholder={"Введите основую з/п.."} type={"number"} onChange={(e) => setSalary(Number(e.target.value))}/></td>
      <td><input className={"input-edit"} placeholder={"Введите кол-во оборудования.."} type={"number"} onChange={(e) => setEquipmentCosts(Number(e.target.value))}/></td>
      <td><input className={"input-edit"} placeholder={"Введите накладные расходы.."} type={"number"} onChange={(e) => setOverheads(Number(e.target.value))}/></td>
      <td><input className={"input-edit"} placeholder={"Введите сметную прибыль.."} type={"number"} onChange={(e) => setEstimatedProfit(Number(e.target.value))}/></td>
      <button className={"submit"} onClick={() => saveValue(rowName, salary, equipmentCosts, overheads, estimatedProfit, IDEntity)}>+</button>
    </tr>
  )
}


export default EditorDataLine;