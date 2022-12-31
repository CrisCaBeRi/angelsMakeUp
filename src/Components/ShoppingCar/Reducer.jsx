//Reducer is used like the file who set a function values that are used with on click actions on buttons to ADD, DELETE, INCREASE OR DECREASE items. 
const Reducer = (cart = [], action) => {//Set an empty array of the buycart 
    //Conditional that use the action (propierty created with dispatch on ecery button) to add items on car
    if (action.type === "ADD"){
        let tempcart = cart.filter(( item ) => item.id === action.payload.prItem ) //payload action is used to add items on array
        if ( tempcart < 1 ) {
            return [...cart, action.payload]            
        }else {
            return cart
        }
    }if (action.type === "REMOVE"){ //using to remove the items on the buy car 
        return cart.filter((item)=>item.prItem !== action.payload.prItem)
    }
    //used to increase of the quantity of the products using  new propierty created on navbarcategories 
    if (action.type === 'INCREASE') {
        let tempcart = cart.map((item) => {          
          if (item.prItem === action.payload.prItem) {            
            return { ...item, prQuantity: item.prQuantity + 1 };
          }
          return item;
        });
        return tempcart;
    }
    //Same operation like increase, the only change is the rest of quantity 
    if (action.type === 'DECREASE') {
        let tempcart = cart.map((item) => {         
          if (item.prItem === action.payload.prItem) {            
            return { ...item, prQuantity: item.prQuantity - 1 };
          }
          return item;
        });
        return tempcart;
    }
    return cart;
};
export default Reducer;