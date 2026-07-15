import { Outlet } from "react-router-dom";
import Header from "../components/Header";


function MainLayout() {
  return (
    <>

      <div className="min-h-screen text-white">
        <Header />

        <main className="pb-10">
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default MainLayout;