import mock from "mockjs";

mock.setup({ timeout: 400 });

const menus = [
  {
    id: "01",
    name: "账户管理",
    submenu: [
      {
        id: "0101",
        name: "注册",
      },
      {
        id: "0102",
        name: "注销",
      },
    ],
  },
  {
    id: "02",
    name: "订单管理",
    submenu: [
      {
        id: "0201",
        name: "下单",
      },
      {
        id: "0202",
        name: "查询",
      },
    ],
  },
  {
    id: "03",
    name: "系统管理",
    submenu: [
      {
        id: "0301",
        name: "日志",
      },
      {
        id: "0302",
        name: "设置",
      },
    ],
  },
  {
    id: "04",
    name: "关于",
    submenu: [],
  },
];
mock.mock("/getmenu", "get", () => {
  return {
    code: 200,
    data: menus,
  };
});
