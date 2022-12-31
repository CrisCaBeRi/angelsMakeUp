import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCar.css";

import ReactWhatsapp from "react-whatsapp";

const Cart = () => {
  //Reducer
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.prPrice * currentvalue.prQuantity;
  };
  const total = cart.reduce(addition, 0);

  return (
    <>
      <h1 className="ttle-cart">Carrito de compras</h1>

      <div className="cards">
        {cart.map((item) => {
          return (
            <div className="items" key={item.prItem}>
              <div className="items-oncar">
                <div className="description-cart">
                  <p>{item.prName}</p>
                  <p>${item.prPrice}</p>
                </div>
                <p>Cantidad: {item.prQuantity}</p>
                <p>Total por productos: {item.prPrice * item.prQuantity}</p>

                <div className="description-end">
                  <img src={item.prImage} alt="" />

                  <div className="buttons-cart">
                    <button
                      style={{ color: "orange" }}
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                    >
                      <i class="ri-delete-bin-5-fill"></i>
                    </button>

                    <button
                      style={{ color: "red" }}
                      onClick={() => {
                        if (item.prQuantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        } else {
                          dispatch({ type: "REMOVE", payload: item });
                        }
                      }}
                    >
                      <i class="ri-subtract-fill"></i>{" "}
                    </button>

                    <button
                      style={{ color: "lightgreen" }}
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                    >
                      <i class="ri-add-circle-fill"></i>{" "}
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}

        {total <= 0 && (<div>
            <h1>Todo esta limpio por aquí</h1>


        </div>)}

        {total > 0 && (
          <div className="container-send">
            <h3>Total a pagar: <span>${total} </span>{" "}</h3>

              <button>
                <ReactWhatsapp
                  number="+57 3212036893"
                  message={`Hello World!!! 
                ${cart.map(
              (item) => item.prQuantity + " " + item.prName
                )}Total a pagar: $${total}`}
                >
                  <p>Enviar pedido <i style={{color:"green", fontSize:"7vw"}} class="ri-whatsapp-line"></i></p>
                </ReactWhatsapp>
              </button>{" "}          
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
