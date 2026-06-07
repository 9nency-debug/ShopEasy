// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="bg-white shadow-md px-8 py-5 sticky top-0">

//       <div className="max-w-7xl mx-auto flex justify-between items-center">

//         <h1 className="text-2xl font-bold">
//           ShopEasy
//         </h1>

//         <nav className="flex gap-8 text-lg">

//           <Link to="/">Home</Link>

//           <Link to="/about">About</Link>

//           <Link to="/cart">Cart</Link>

//           <Link to="/contact">Contact</Link>

//         </nav>

//       </div>

//     </header>
//   );
// }

// export default Header;

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-extrabold tracking-tight text-black">
          ShopEasy
        </h1>

        <nav className="flex gap-8 text-gray-700 font-medium">

          <Link className="hover:text-black transition" to="/">Home</Link>
          <Link className="hover:text-black transition" to="/about">About</Link>
          <Link className="hover:text-black transition" to="/cart">Cart</Link>
          <Link className="hover:text-black transition" to="/contact">Contact</Link>

        </nav>

      </div>

    </header>
  );
}

export default Header;