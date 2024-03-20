import { LayoutIndex } from "../constant";

const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home/index",
        element: <div className="h-[1000px]">home</div>,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home",
        },
      },
    ],
  },
];

export default homeRouter;
