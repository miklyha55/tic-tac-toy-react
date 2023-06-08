import React, { CSSProperties } from 'react';
import { IROCellCfg } from './interfaces';

export default class Cell extends React.Component {
    props: IROCellCfg;
    cellStyle: CSSProperties
    
    constructor(props: IROCellCfg) {
        super(props);
        this.props = props;
        this.cellStyle = {
            display: "block",
            position: "absolute",
            backgroundColor: this.props.color,
            border: `${this.props.borderSize}px solid ${this.props.borderColor}`,
            width: this.props.width,
            height: this.props.height,
            left: this.props.x,
            top: this.props.y,
        };
    }

    render() {
        return (
            <div style={this.cellStyle}></div>
        );
    }
}

