import React, {ReactElement} from "react";

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
    visible: boolean,
    changeHandler(ingredient: Ingredient): void
}

const SearchBoard: React.FC<SearchBoardProps> =
    ({
         offset, item, changeHandler
     }) => {

    const checked = (ingredient: Ingredient) => item.selected.map(item => item.id).includes(ingredient.id);

        let items: ReactElement[] = [];
        if (item && item.id && item.items) {
            items = item.items.map(ingredient => (
                <FormControlLabel
                    key={ingredient.id}
                    control={<Checkbox checked={checked(ingredient)} onChange={() => changeHandler(ingredient)} />}
                    label={ingredient.name}
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
