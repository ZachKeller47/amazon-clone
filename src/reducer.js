export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            //LOGIC FOR ADDING ITEM
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_CART":
            //LOGIC FOR REMOVING ITEM
            // cloned the Cart
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newBasket = [...state.basket];

            if (index >= 0) {
                // item exists in cart, remove it
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as it is not in cart.`
                    )
            }

            return { ...state,
                basket: newBasket
            };
            default:
                return state;
    }
}

export default reducer;
 