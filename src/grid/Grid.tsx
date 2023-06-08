import React, { CSSProperties } from 'react';
import { IROGridCfg } from './interfaces';
import config from "../configs/config.json";
import Cell from '../cell/Cell';

export default class Grid extends React.Component {
    props: IROGridCfg;
    wrapperStyle: CSSProperties

    constructor(props: IROGridCfg) {
        super(props);
        this.props = props;
        this.wrapperStyle = {
            position: "absolute",
            width: this.props.col * this.props.width,
            height: this.props.row * this.props.height,
            margin: "auto",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    }

    render() {
        return this.createCell();
    }

    private createCell() {
        const cellArray: Array<JSX.Element> = [];
        let index: number = 0;

        for (let col = 0; col < this.props.col; col++) {
            for (let row = 0; row < this.props.row; row++) {
                cellArray.push(<Cell
                    key={index}
                    x = {row * this.props.width}
                    y = {col * this.props.width}
                    width = {this.props.width}
                    height = {this.props.height}
                    borderColor = {config.cell.borderColor}
                    borderSize = {config.cell.backgroundSize}
                    color = {config.cell.backgroundColor}
                ></Cell>);

                index++;
            }
        }

        return (
            <div className='wrapper' style={this.wrapperStyle}>
                {cellArray}
            </div>
        )
    }
}

