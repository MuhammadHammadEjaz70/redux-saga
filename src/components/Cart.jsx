import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

export const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData?.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <>
      <h1>Cart</h1>
      <div className="cartPageContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Caetgory</th>
            </tr>
          </thead>

          <tbody>
            {cartData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="priceDetails">
        <div>
          <span>Amount: </span>
          <span>{amount}</span>
        </div>
        <div>
          <span>Discount: </span>
          <span>{amount / 10}</span>
        </div>
        <div>
          <span>Tax: </span>
          <span>0000</span>
        </div>
        <div>
          <span>Total: </span>
          <span>{amount - amount / 10}</span>
        </div>
      </div>
    </>
  );
};
