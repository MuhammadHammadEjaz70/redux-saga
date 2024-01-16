import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

export const Header = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);
  // console.log("redux data in header = ", result);

  return (
    <div className="header">
      <Link to="/">
        <h2 style={{ float: "left", margin: "20px" }}>Logo</h2>
      </Link>
      <div className="searchBox">
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => dispatch(productSearch(e.target.value))}
        />
      </div>
      <Link to="/cart">
        <div className="divCart">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="..."
          />
        </div>
      </Link>
    </div>
  );
};
