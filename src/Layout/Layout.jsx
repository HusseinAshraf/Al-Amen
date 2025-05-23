import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      
      <NavBar />

      
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
}

export default Layout;
