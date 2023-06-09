import React from 'react';
import { CLASS_NAMES, TEXT_TITLE, WINNER_TYPES } from '../constants';
import { useAppSelector } from '../store/hook';

const Title: React.FC = () => {
    const winnerType: number = useAppSelector(state => state.root.winnerType);

    const setText = () => {
        if(!winnerType) {
            return;
        }

        switch (winnerType) {
            case WINNER_TYPES.Draw:
                return TEXT_TITLE.Draw;
            case WINNER_TYPES.Cross:
                return TEXT_TITLE.Cross;
            case WINNER_TYPES.Zero:
                return TEXT_TITLE.Zero;
        };
    };

    return (
        <div className = {CLASS_NAMES.Title}>
            <div>{setText()}</div>
        </div>
    );
};

export default Title;

