import { Outlet ,
  BrowserRouter as Router,
  Route,
  Link,
  useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LapStore = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default LapStore;
