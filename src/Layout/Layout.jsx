import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";


function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <NavBar />
      <div className="flex-grow flex flex-col justify-between pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
