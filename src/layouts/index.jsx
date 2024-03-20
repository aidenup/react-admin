import { Outlet } from "react-router-dom";

export default function LayoutIndex() {
  return (
    <div className="flex h-full">
      <div className="w-40 border">sider</div>
      <div className="flex-1 flex flex-col">
        <div className="h-16 border">header</div>
        <div className="h-10 border">tabs</div>
        <div className="flex-auto overflow-x-auto">
          <Outlet />
        </div>
        <div>footer</div>
      </div>
    </div>
  );
}
