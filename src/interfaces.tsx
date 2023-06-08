export interface IROGridCfg {
    readonly col: number;
    readonly row: number;
    readonly width: number;
    readonly height: number;
}

export interface IROCellCfg {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly index: number;
    type: string;
    isActive: boolean;
}

export interface IGameStateCfg {
    isPlayer: boolean;
    cellTypeArray: Array<string>;
}