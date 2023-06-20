import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type dataType = {
    id: number;
    name: string;
    moves: object[];
    types: object[];
    stats: object[];
}
type InitialState = {
    currentData: dataType[],
    currentPage: number,
}
const initialState: InitialState = {
    currentData: [],
    currentPage: 0,
}

const currentDataReducer = createSlice({

    name: 'currentData',
    initialState,
    reducers: {
        setCurrentData(state, action: PayloadAction<dataType[]>) {
            state.currentData = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },

    },

})

export default currentDataReducer.reducer;
export const {setCurrentData, setCurrentPage} = currentDataReducer.actions;
