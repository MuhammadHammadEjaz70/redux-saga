import React from "react";
import { useSelector } from "react-redux";
export const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("redux data in header = ", result);
  // console.log("redux data in header = ", result.length);

  return (
    <div className="header">
      <div className="divCart">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="..."
        />
      </div>
    </div>
  );
};
