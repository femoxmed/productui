// Expenses Reducer

const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.product
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.updates
                    };
                } else {
                    return product;
                };
            });
        default:
            return state;
    }
};