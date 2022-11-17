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
}
export const getEntityIDAPI = async (IDEntity: number) => {
  axios.get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/list`, { headers: { Accept: "*/*" } })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      console.log('error ' + error);
    });
}
export const createRowEntityAPI = async (IDEntity: number) => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "*/*"
    },
    body: JSON.stringify({
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
}