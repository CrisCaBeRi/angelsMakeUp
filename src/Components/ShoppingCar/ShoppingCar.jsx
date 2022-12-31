import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCar.css";

import imgBackground from './Assets/backgorundCart.png';

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

      <div className="cards-shopping">
        {cart.map((item) => {
          return (
            <div className="items" key={item.prItem}>

              <div className="items-oncar">
                <div className="description-cart">
                  <p>{item.prName}</p>
                  <p><span>${item.prPrice}</span> </p>
                </div>
                <p>Cantidad: <span>{item.prQuantity}</span> </p>
                <p>Total por productos: <span>{item.prPrice * item.prQuantity}</span></p>

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

        {total <= 0 && (<div className="empty-cart">       
            <h1>Todo esta limpio por aquí...</h1>
            <img src={imgBackground}alt="" />
          </div>)}

        {total > 0 && (       
          <div className="container-send">              
            <h3>Total: <span>${total} </span></h3>            
            <h3>Envío: <span>${3500} </span></h3>
            <h3>Total a pagar: <span>${total + 3500} </span></h3>


              <button>
                <ReactWhatsapp 
                  number="+57 3212036893"
                  message={`Hola Angel's Makeup, quisiera ordenar lo siguiente:  
                ${cart.map(
              (item) => item.prQuantity + " / " + item.prName 
                )}
                || Total a pagar: $${total + 3500}`}
                >
                  <p>Enviar pedido <i style={{color:"white"}} class="ri-whatsapp-line"></i></p>
                </ReactWhatsapp>
              </button>         
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
