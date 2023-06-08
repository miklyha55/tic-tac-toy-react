import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGameStateCfg } from "../interfaces";
import { OBJECT_TYPES } from "../constants";
import config from "../configs/config.json";

const containArray = () => {
    const cellTypeArray: Array<string> = [];

    for (let index = 0; index < config.grid.col * config.grid.row; index++) {
        cellTypeArray.push(OBJECT_TYPES.None);
    }

    return cellTypeArray;
};

const initialState: IGameStateCfg = {
    isPlayer: false,
    cellTypeArray: containArray(),
};

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
});

export const { changeState, setCellType } = rootSlice.actions;
export default rootSlice.reducer;

