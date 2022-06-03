import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface BrandState{
    value: string
}

const initialState: BrandState = {
    value:'',
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        updateBrand: (state,action:PayloadAction<string>) => {
            console.log(action.payload);
            state.value = action.payload;
        }
    }
})

export const { updateBrand } = brandSlice.actions

export default brandSlice.reducer