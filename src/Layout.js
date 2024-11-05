import Header from "./partials/Header";
import Nav from "./partials/Nav";
import Footer from "./partials/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
