import uuid from 'uuid';
import axios from 'axios';
// ADD_EXPENSE
export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});


export const startAddProduct = (productData = {}) => {
    return (dispatch) => {
        const {
            Name = '',
                Category = {},
                Price = 0,
                Color = [],
                Image = ''
        } = productData;
        const product = { Name, Category, Price, Color, Image };


        return axios.post('localhost:8081/api/product/all', product).then((ref) => {
                dispatch(addProduct({
                    ...product
                }))
            })
            // database.ref('expenses').push(expense).then((ref) => {
            //     dispatch(addExpense({
            //         id: ref.key,
            //         ...expense
            //     }));
            // });
    };
};
// REMOVE_EXPENSE
export const removeProduct = ({ id } = {}) => ({
    type: 'REMOVE_PRODUCT',
    id
});

// EDIT_EXPENSE
export const editProduct = (id, updates) => ({
    type: 'EDIT_PRODUCT',
    id,
    updates
});