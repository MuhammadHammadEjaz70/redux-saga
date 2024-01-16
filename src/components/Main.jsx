import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productListing } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(" data in main component = ", data);
  useEffect(() => {
    dispatch(productListing());
  }, []);

  return (
    <>
      <div className="btn">
        <button
          onClick={() => {
            dispatch(emptyCart());
          }}
        >
          Empty Cart
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
        className="products"
      >
        {data.map((item) => (
          <div
            style={{
              padding: "30px",
              border: "1px solid gray",
              margin: "30px",
            }}
            key={item.id}
            className="productItem"
          >
            <img
              style={{ height: "150px", width: "150px" }}
              src={item.photo}
              alt="..."
            />
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to cart
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
