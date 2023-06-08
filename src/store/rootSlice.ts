import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGameStateCfg } from "../interfaces";
import { OBJECT_TYPES } from "../constants";

const initialState: IGameStateCfg = {
    isPlayer: false,
    cellTypeArray: ["","","","","","","","",""],
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        changeState(state, action: PayloadAction) {
            state.isPlayer = !state.isPlayer;
        },

        setCellType(state, action: PayloadAction<number>) {
            state.cellTypeArray[action.payload] =
                state.isPlayer ? OBJECT_TYPES.Cross : OBJECT_TYPES.Zero;
        },
    }
})
export const { changeState, setCellType } = rootSlice.actions;
export default rootSlice.reducer;

