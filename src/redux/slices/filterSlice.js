import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'ascending',
    stops: [0],
    priceRange: {
        min: 0,
        max: 1000000,
    },
    airlines: {},
};
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload
        },
        toggleStops(state, action) {
            const id = action.payload
            const index = state.stops.indexOf(id)

           if(index === -1) {
            state.stops.push(id)
           } else {
            state.stops.splice(index,1)
           }
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload.priceRange
        },
        toggleAirlines(state, action) {
            const carrierName = action.payload
            state.airlines[carrierName] = !state.airlines[carrierName]
        },
    }
})

export const selectSort = (state) => state.filter

export const {setValue, toggleStops, setPriceRange, toggleAirlines} = filterSlice.actions

export default filterSlice.reducer