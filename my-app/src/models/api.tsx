import axios from "axios";

export const createEntityAPI = async () => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "*/*"
    },
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}//создание сущности
export const getStructureIDAPI = async (IDEntity: number, getValue: any) => {
  axios.get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/list`, { headers: { Accept: "*/*" } })
    .then(response => {
      getValue(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error ' + error);
    });
}// получение структуры
export const createRowEntityAPI = async (IDEntity: number, data: any) => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "*/*"
    },
    body: JSON.stringify(data !== null ? data : {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: null,
      rowName: "string",
      salary: 0,
      supportCosts: 0
    })
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}//создание строки у определенной сущности
export const deleteRowFromEntityAPI = async (IDEntity: number, IDRow: number, setTree: any) => {
  axios.delete(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/${IDRow}/delete`)
    .then((r) => {
      const valueItem: any[] = [{
        id: null,
        rowName: null,
        total: null,
        salary: null,
        mimExploitation: null,
        machineOperatorSalary: null,
        materials: null,
        mainCosts: null,
        supportCosts: null,
        equipmentCosts: null,
        overheads: null,
        estimatedProfit: null,
        child: [null]
      }];
      setTree(valueItem);
    });
}