import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams(); // Get the product ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const [productDisplay, setProductDisplay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product from the productData list
    const product = productData.find((el) => el._id === filterby);

    if (product) {
      setProductDisplay(product);
    } else {
      // Fallback to any product from the list if no product matches the ID
      setProductDisplay(productData[0]); // Use the first product as fallback
    }
    
    setLoading(false);
  }, [filterby, productData]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (!productDisplay) {
    return <div>Product not found or not loaded</div>;
  }

  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
    navigate(`/menu/${productDisplay._id}`);
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image || "https://via.placeholder.com/150"} // Fallback image
            className="hover:scale-105 transition-all h-full"
            alt={productDisplay.name || "Product Image"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name || "Product Name"}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category || "Product Category"}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price || "Price"}</span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleBuy}
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description :</p>
            <p>{productDisplay.description || "Product Description"}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import AllProduct from "../component/AllProduct";
// import { addCartItem } from "../redux/productSlide";

// const Menu = () => {
//   const { filterby } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.product.productList);
//   const [productDisplay, setProductDisplay] = useState(null);

//   useEffect(() => {
//     if (productData.length > 0) {
//       const product = productData.find((el) => el._id === filterby);
//       setProductDisplay(product);
//     }
//   }, [filterby, productData]);

//   if (!productDisplay && productData.length === 0) {
//     return <div>Loading products...</div>;
//   }

//   if (!productDisplay) {
//     return <div>Product not found or not loaded</div>;
//   }

//   const handleAddCartProduct = () => {
//     dispatch(addCartItem(productDisplay));
//   };

//   const handleBuy = () => {
//     dispatch(addCartItem(productDisplay));
//     navigate("/cart");
//   };

//   return (
//     <div className="p-2 md:p-4">
//       <div className="w-full max-w-4xl m-auto md:flex bg-white">
//         <div className="max-w-sm overflow-hidden w-full p-5">
//           <img
//             src={productDisplay.image}
//             className="hover:scale-105 transition-all h-full"
//             alt={productDisplay.name}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
//             {productDisplay.name}
//           </h3>
//           <p className="text-slate-500 font-medium text-2xl">
//             {productDisplay.category}
//           </p>
//           <p className="font-bold md:text-2xl">
//             <span className="text-red-500">₹</span>
//             <span>{productDisplay.price}</span>
//           </p>
//           <div className="flex gap-3">
//             <button
//               onClick={handleBuy}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Buy
//             </button>
//             <button
//               onClick={handleAddCartProduct}
//               className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//             >
//               Add Cart
//             </button>
//           </div>
//           <div>
//             <p className="text-slate-600 font-medium">Description :</p>
//             <p>{productDisplay.description}</p>
//           </div>
//         </div>
//       </div>

//       <AllProduct heading={"Related Product"} />
//     </div>
//   );
// };

// export default Menu;
