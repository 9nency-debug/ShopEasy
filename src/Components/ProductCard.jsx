// function ProductCard({ title, price, image }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 duration-300">

//       <img
//         src={image}
//         alt={title}
//         className="h-48 w-full object-cover rounded-lg"
//       />

//       <h2 className="text-xl font-semibold mt-4">
//         {title}
//       </h2>

//       <p className="text-gray-600 mt-2">
//         ₹ {price}
//       </p>

//       <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800">
//         Add To Cart
//       </button>

//     </div>
//   );
// }

// export default ProductCard;

function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">

      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          Premium quality product
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-lg font-bold text-black">
            ₹{price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;