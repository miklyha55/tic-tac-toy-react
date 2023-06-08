import React, { CSSProperties } from 'react';
import { IROCellCfg } from '../interfaces';
import { CLASS_NAMES } from '../constants';
import { useAppDispatch } from '../store/hook';
import { changeState, setCellType } from '../store/rootSlice';
import '../css/Cell.css';

const Cell: React.FC<IROCellCfg> = (props: IROCellCfg) => {
    const cellStyle: CSSProperties = {
        width: props.width,
        height: props.height,
        left: props.x,
        top: props.y,
    };

    const dispatch = useAppDispatch();
    const onClickHandler = (index: number) => {
        if(!props.isActive) {
            return;
        }

        dispatch(changeState());
        dispatch(setCellType(index));
    };

    return (
        <div 
            className = {CLASS_NAMES.Cell}
            style={cellStyle}
            onClick={onClickHandler.bind(this, props.index)}
        >
            <div>{props.type}</div>
        </div>
    );
};

export default Cell;

