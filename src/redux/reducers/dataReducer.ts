import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type dataType = {
    id: number;
    name: string;
    moves: object[];
    types: object[];
    stats: object[];
}
type InitialState = {
    data: dataType[],
}
const initialState: InitialState = {
    data: [],
}

const dataReducer = createSlice({

    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<dataType[]>) {
            state.data = action.payload
        },
    },

})

export default dataReducer.reducer;
export const {setData} = dataReducer.actions;
