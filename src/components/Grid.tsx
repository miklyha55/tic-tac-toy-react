import { IROGridCfg } from '../interfaces';
import React, { CSSProperties, MutableRefObject, useEffect, useRef } from 'react';
import { CLASS_NAMES, OBJECT_TYPES, WINNER_TYPES } from '../constants';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { setWinnerType } from '../store/rootSlice';
import Cell from './Cell';
import '../css/Grid.css';

const Grid: React.FC<IROGridCfg> = (props: IROGridCfg) => {
    const cellTypeArray: Array<string> = useAppSelector(state => state.root.cellTypeArray);
    const wrapperStyle: CSSProperties = {
        width: props.col * props.width,
        height: props.row * props.height,
    };

    const switchWinnerType = (type: string) => {
        switch (type) {
            case OBJECT_TYPES.Cross:
                return WINNER_TYPES.Cross;
        
            case OBJECT_TYPES.Zero:
                return WINNER_TYPES.Zero;
        } 

        return WINNER_TYPES.None;
    };

    const checkWinner = (type: string) => {
        const winnerType: number =
            (
            cellTypeArray[0] === type &&
            cellTypeArray[1] === type &&
            cellTypeArray[2] === type
            ) || (
            cellTypeArray[3] === type &&
            cellTypeArray[4] === type &&
            cellTypeArray[5] === type
            ) || (
            cellTypeArray[6] === type &&
            cellTypeArray[7] === type &&
            cellTypeArray[8] === type
            ) || (
            cellTypeArray[0] === type &&
            cellTypeArray[3] === type &&
            cellTypeArray[6] === type
            ) || (
            cellTypeArray[1] === type &&
            cellTypeArray[4] === type &&
            cellTypeArray[7] === type
            ) || (
            cellTypeArray[2] === type &&
            cellTypeArray[5] === type &&
            cellTypeArray[8] === type
            ) || (
            cellTypeArray[0] === type &&
            cellTypeArray[4] === type &&
            cellTypeArray[8] === type
            ) || (
            cellTypeArray[2] === type &&
            cellTypeArray[4] === type &&
            cellTypeArray[6] === type
            )
            ?
            switchWinnerType(type) : WINNER_TYPES.None;

        return winnerType;
    };

    const dispatch = useAppDispatch();
    const winnerCounter: MutableRefObject<number> = useRef(0);
    const winnerCross: number = checkWinner(OBJECT_TYPES.Cross);
    const winnerZero: number = checkWinner(OBJECT_TYPES.Zero);
    const isWinner: boolean = !!winnerCross || !!winnerZero;
    let winnerType: number = winnerCross || winnerZero;
    
    if(winnerCounter.current === props.row * props.col) {
        winnerType = WINNER_TYPES.Draw;
    };

    useEffect(() => {
        !isWinner && winnerCounter.current++;
    });

    useEffect(() => {
        isWinner && dispatch(setWinnerType(winnerType));
    }, [isWinner]);

    const createCell = () => {
        const cellArray: Array<JSX.Element> = [];
        let index: number = 0;

        for (let col = 0; col < props.col; col++) {
            for (let row = 0; row < props.row; row++) {
                cellArray.push(<Cell
                    key = {index}
                    index = {index}
                    x = {row * props.width}
                    y = {col * props.width}
                    width = {props.width}
                    height = {props.height}
                    type = {cellTypeArray[index]}
                    isActive = {cellTypeArray[index] === OBJECT_TYPES.None && !isWinner}
                ></Cell>);

                index++;
            }
        }

        return(
            <div className = {CLASS_NAMES.Grid} style={wrapperStyle}>
                {cellArray}
            </div>
        );
    };
    
    return createCell();
};

export default Grid;

