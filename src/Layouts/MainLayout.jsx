// import { Outlet } from "react-router-dom";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function MainLayout() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">

//       <Header />

//       <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
//         <Outlet />
//       </main>

//       <Footer />

//     </div>
//   );
// }

// export default MainLayout;

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">

      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;