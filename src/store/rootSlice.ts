import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGameStateCfg } from "../interfaces";
import { OBJECT_TYPES, WINNER_TYPES } from "../constants";
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
    winnerType: WINNER_TYPES.None,
    cellTypeArray: containArray(),
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        setCellType(state, action: PayloadAction<number>) {
            state.isPlayer = !state.isPlayer;
            state.cellTypeArray[action.payload] =
                state.isPlayer ? OBJECT_TYPES.Cross : OBJECT_TYPES.Zero;
        },

        setWinnerType(state, action: PayloadAction<number>) {
            state.winnerType = action.payload;
        },
    },
});

export const { setCellType, setWinnerType } = rootSlice.actions;
export default rootSlice.reducer;

