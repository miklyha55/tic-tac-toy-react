import React, { CSSProperties } from 'react';
import { IROGridCfg } from '../interfaces';
import { CLASS_NAMES, OBJECT_TYPES } from '../constants';
import Cell from '../cell/Cell';
import '../css/Grid.css';
import { useAppSelector } from '../store/hook';

const Grid: React.FC<IROGridCfg> = (props: IROGridCfg) => {
    const cellTypeArray: Array<string> = useAppSelector(state => state.root.cellTypeArray);

    const wrapperStyle: CSSProperties = {
        width: props.col * props.width,
        height: props.row * props.height,
    };

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
                    isActive = {cellTypeArray[index] === OBJECT_TYPES.None}
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

