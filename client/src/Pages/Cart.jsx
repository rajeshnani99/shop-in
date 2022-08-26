import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import emptyImg from "../Pages/Images/cart-empty.jpg";
import "../Pages/Cart.css";

import { DELETE } from "../Redux/Actions/action";

const Cart = () => {
  const getCartData = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(DELETE(id));
  };

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="cart_container">
        {getCartData.length ? (
          <>
            <button className="Back_TO_Home" onClick={() => backToHome()}>
              <i className="fa-solid fa-circle-arrow-left"></i> back to Home
            </button>

            <h1> You have Ordered:</h1>
            {getCartData.map((e, index) => {
              return (
                <div className="cart_card_body" key={index}>
                  <div className="cart_image">
                    <img src={e.image} alt="cartImage" />
                  </div>
                  <div className="cart_des">
                    <h2> {e.title} </h2>
                    <p> {e.description} </p>
                    <p>
                      <b> Price : Rs {e.price} </b>
                      <span className="Price_offer"> Rs {e.offer} </span>
                    </p>
                  </div>
                  <div className="cart_btn">
                    <button onClick={() => deleteItem(e.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="cartEmpty">
            <div className="cart_Empty_img">
              <img src={emptyImg} alt="emptyCartImage" />
            </div>

            <button className="add_To_Cart" onClick={() => backToHome()}>
              Add somthing to cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
