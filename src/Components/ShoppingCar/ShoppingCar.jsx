//Import of the elements that are used 
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCar.css";
import imgBackground from './Assets/backgorundCart.png';
import ReactWhatsapp from "react-whatsapp";

const Cart = () => {
  //Reducer methods to maipulate the buycart 
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
        {cart.map((item) => { //map method to print the cards of the products selected 
          return (
            <div className="items" key={item.prItem}>
              <div className="items-oncar">
                <div className="description-cart">
                  <p>{item.prName}</p>
                  <p><span>${item.prPrice}</span> </p>
                </div>
                <p>Cantidad: <span>{item.prQuantity}</span> </p>
                <p>Total por productos: <span>{item.prPrice * item.prQuantity}</span></p> {/* Operation to change the cost of the item if the user chose morathan 1 quantity */}
                <div className="description-end">
                  <img src={item.prImage} alt="" />
                  <div className="buttons-cart">
                    <button
                      style={{ color: "orange" }}
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })//Call of the REMOVE method created on Reducer
                      }>
                      <i class="ri-delete-bin-5-fill"></i> {/* i tags are imported from remixicons and contents a logo */}
                    </button>
                    <button
                      style={{ color: "red" }}
                      onClick={() => {
                        if (item.prQuantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });//Call of decrease method created on reducer 
                        } else {
                          dispatch({ type: "REMOVE", payload: item });//This method of reducer is called when the user clic and the item has only 1, with this call, automatically removes the product.
                        }
                      }}>
                      <i class="ri-subtract-fill"></i>{" "}
                    </button>
                    <button
                      style={{ color: "lightgreen" }}
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }>
                      <i class="ri-add-circle-fill"></i>{" "}
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
        {/* Ternary operator to print elements if the buy cart is empty */}
        {total <= 0 && (<div className="empty-cart">       
            <h1>Todo esta limpio por aquí...</h1>
            <img src={imgBackground}alt="" />
          </div>)}
        {/* Ternary operator to print elements if the buy cart has one or more elements */}
        {total > 0 && (       
          <div className="container-send">              
            <h3>Total: <span>${total} </span></h3>            
            <h3>Envío: <span>${3500} </span></h3>
            <h3>Total a pagar: <span>${total + 3500} </span></h3>
              {/* button created to send the order and this button use a library called react ReactWhatsapp that are used to send a default mesage on whatsapp app  */}
              <button>
                <ReactWhatsapp 
                  number="+57 3212036893"
                  message={`Hola Angel's Makeup, quisiera ordenar lo siguiente:  
                ${cart.map( //Map agan to take the list opf the products that the user will buy 
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
