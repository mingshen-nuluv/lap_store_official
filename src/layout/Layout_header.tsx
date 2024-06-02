import { Outlet } from "react-router-dom";
import Header from "./Header";

const LayoutHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default LayoutHeader;
