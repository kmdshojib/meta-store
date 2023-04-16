import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    isLoading: false,
}

const productSLice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getFetchProducts: (state) => {
            state.isLoading = true;
        },
        getProductSuccess: (state, action) => {
            state.isLoading = true;
            state.product = action.payload
        },
        getAddProducts: (state, action) => {
            state.isLoading = false;
            state.product = action.payload
        },
        getProductError: (state, action) => {
            state.isLoading = false
        }
    }
})

export const { getAddProducts, getFetchProducts, getProductSuccess, getProductError } = productSLice.actions;
export default productSLice.reducer