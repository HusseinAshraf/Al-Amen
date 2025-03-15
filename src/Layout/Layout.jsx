import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* شريط التنقل */}
      <NavBar />

      {/* المحتوى الرئيسي */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  );
}

export default Layout;
