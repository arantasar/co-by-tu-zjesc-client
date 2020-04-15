import React from "react";

import styles from "./SearchBoard.module.scss";
import {Checkbox, FormControlLabel} from "@material-ui/core";

interface Ingredient {
    id: number,
    name: string
}

interface SearchBoardProps {
    offset: number,
    item: {
        id: number,
        placeholderText: string,
        items: Ingredient[],
        selected: Ingredient[]
    },
    visible: boolean
}

const SearchBoard: React.FC<SearchBoardProps> =
    ({
         offset = 0, item = {}
     }) => {
        let items: any[] = [];
        if (item && item.items) {
            items = item.items.map(item => (
                <FormControlLabel
                    key={item.id}
                    control={<Checkbox />}
                    label={item.name}
                />
            ))
        }

        let baseArray:number[] = [];
        for (let i = 0; i < offset; i++) {
            baseArray.push(i);
        }
        let offsetDivs = baseArray.map((item, index) => (<div key={index}> </div>))

        return (<div className={styles.wrapper}>
            {offsetDivs}
            <div className={styles.items}>
                {items}
            </div>
        </div>);
    };

export default SearchBoard;
