const Reducer = (cart = [], action) => {
    
    if (action.type === "ADD"){
        let tempcart = cart.filter(( item ) => item.id === action.payload.prItem ) //Se usa pr item como id unico de cada producto para diferenciar adentro del array y sumar
        if ( tempcart < 1 ) {
            return [...cart, action.payload]            
        }else {
            return cart
        }
    }if (action.type === "REMOVE"){
        return cart.filter((item)=>item.prItem !== action.payload.prItem)
    }

    if (action.type === 'INCREASE') {
        let tempcart = cart.map((item) => {            

          if (item.prItem === action.payload.prItem) {            

            return { ...item, prQuantity: item.prQuantity + 1 };
          }
          return item;
        });
        return tempcart;
    }
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