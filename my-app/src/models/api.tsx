export const createEntityAPI = (funcSetID: any) => {
  fetch("http://185.244.172.108:8081/v1/outlay-rows/entity/create", {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "*/*"
    }
  })
    .then(response => response.json())
    .then(data => funcSetID(data.id));
}
export const getEntityIDAPI = (IDEntity: number, funcSetEntity: any) => {
  fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/list`, {
    method: "GET",
    mode: "cors",
    headers: {
      accept: "*/*"
    }
  })
    .then(response => response.json())
    .then(data => funcSetEntity(data));
}
export const createRowEntityAPI = (IDEntity: number) => {
  fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${IDEntity}/row/create`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "*/*"
    }
  })
    .then(response => response.json())
    // .then(data => funcSetEntity(data));
}