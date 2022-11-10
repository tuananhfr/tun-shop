export const initialState = { basket: [] };
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDITEM':
            return { ...state, basket: [...state.basket, action.item] };

            break;
        case 'DELITEM':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
            }
            return { ...state, basket: newBasket };
            break;
        default:
            return state;
            break;
    }
};
