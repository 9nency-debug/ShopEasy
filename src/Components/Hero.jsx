// function Hero() {
//   return (
//     <section className="bg-black text-white py-24 px-6 text-center rounded-2xl">

//       <h1 className="text-5xl font-bold mb-6">
//         Welcome To Our Store
//       </h1>

//       <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//         Discover premium products with modern style and best prices.
//       </p>

//       <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl mt-8 font-semibold hover:bg-yellow-300">
//         Shop Now
//       </button>

//     </section>
//   );
// }

// export default Hero;

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl">

      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>

      <div className="relative text-center text-white py-28 px-6">

        <h1 className="text-5xl font-extrabold mb-6">
          Upgrade Your Lifestyle
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover premium products crafted for modern living.
          Style, comfort and performance in one place.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Shop Now
        </button>

      </div>

    </section>
  );
}

export default Hero;