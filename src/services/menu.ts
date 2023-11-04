import request from "@/configs/request";

export function addMenuItem(params) {
  return request.post("/menu/add", {
    headers: {
      "Content-Type": "application/json",
    },
    data: params,
  });
}

export function getMenus() {
  return request.get("/menus/get", {
    data: {}
  });
}