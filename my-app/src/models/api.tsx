export const createEntityAPI = async () => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}
export const getEntityIDAPI = async (IDEntity: number) => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/list`, {
    method: "GET"
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}
export const createRowEntityAPI = async (IDEntity: number) => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/list`, {
    method: "GET"
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}