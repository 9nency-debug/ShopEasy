// import ProductCard from "./ProductCard";

// function ProductSection() {

//   const products = [
//     {
//       id: 1,
//       title: "Nike Shoes",
//       price: 2999,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
//     },

//     {
//       id: 2,
//       title: "Headphones",
//       price: 1999,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
//     },

//     {
//       id: 3,
//       title: "Watch",
//       price: 4999,
//       image:
//         "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
//     }
//   ];

//   return (
//     <section className="py-12">

//       <h1 className="text-4xl font-bold mb-8 text-center">
//         Featured Products
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             price={product.price}
//             image={product.image}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }

// export default ProductSection;

import ProductCard from "./ProductCard";

function ProductSection() {
  const products = [
    {
      id: 1,
      title: "Nike Sneakers",
      price: 2999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 1999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ];

  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;