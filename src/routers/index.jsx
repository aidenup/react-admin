import { useRoutes, Navigate } from "react-router-dom";

const metaRouters = import.meta.glob("./modules/*.jsx", { eager: true });
export const routerArray = [];

Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...metaRouters[item][key]);
  });
});
console.log("routerArray", routerArray);
export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/home/index" />,
  },
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes; // 返回路由配置
};

export default Router;
