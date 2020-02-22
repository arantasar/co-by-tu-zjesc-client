import React, {useState} from "react";
import Ingredients from "./Ingredients/Ingredients";
import Categories from "./Categories/Categories";
import Filters from "./Filters/Filters";
import Sizes from "./Sizes/Sizes";
import styles from "./Search.module.scss";
import {Container, Button} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ingredientsArray from "./../../data/Ingredients";
import categoriesArray from "./../../data/Categories";
import filtersArray from "./../../data/Filters";
import sizesArray from "../../data/Sizes";

const Search = ({search}) => {

    // TODO: Refactor into two smaller components
    // TODO: DRY

    const [ingredients, setIngredients] = useState(new Set());
    const [categories, setCategories] = useState(new Set());
    const [filters, setFilters] = useState(new Set());
    const [sizes, setSizes] = useState(new Set([{id: 1, name: "1"}]));
    const [activeList, setActiveList] = useState("");

    const setVisible = comp => {
        if (activeList === comp) {
            setActiveList("");
        } else {
            setActiveList(comp);
        }
    };

    const showComponent = comp => (activeList === comp ? null : styles.hidden);

    const showIngredients = showComponent("ingredients");
    const showCategories = showComponent("categories");
    const showFilters = showComponent("filters");
    const showSizes = showComponent("sizes");

    const handleChange = (item, component) => {
        const dict = {
            ingredients: setIngredients,
            categories: setCategories,
            filters: setFilters,
            sizes: setSizes
        };

        const objects = {
            ingredients,
            categories,
            filters,
            sizes
        };

        let newValue = new Set(objects[component]);

        switch (component) {
            case "sizes":
                newValue = new Set();
                newValue.add(item);
                break;
            default:
                if (newValue.has(item)) {
                    newValue.delete(item);
                } else {
                    newValue.add(item);
                }
        }

        dict[component](newValue);
    };

    const ingredientsList = ingredientsArray.map(item => (
        <FormControlLabel
            key={item.id}
            control={
                <Checkbox
                    checked={ingredients.has(item)}
                    onChange={() => {
                        handleChange(item, "ingredients");
                    }}
                />
            }
            label={item.name}
        />
    ));

    const categoriesList = categoriesArray.map(item => (
        <FormControlLabel
            key={item.id}
            control={
                <Checkbox
                    checked={categories.has(item)}
                    onChange={() => {
                        handleChange(item, "categories");
                    }}
                />
            }
            label={item.name}
        />
    ));

    const filtersList = filtersArray.map(item => (
        <FormControlLabel
            key={item.id}
            control={
                <Checkbox
                    checked={filters.has(item)}
                    onChange={() => {
                        handleChange(item, "filters");
                    }}
                />
            }
            label={item.name}
        />
    ));

    const sizesList = sizesArray.map(item => (
        <FormControlLabel
            key={item.id}
            control={
                <Checkbox
                    checked={sizes.has(item)}
                    onChange={() => {
                        handleChange(item, "sizes");
                    }}
                />
            }
            label={item.name}
        />
    ));

    return (
        <section className={styles.wrapper}>
            <Container>
                <h2 className={styles.header}>Przepisy</h2>
                <div className={styles.searchWrapper}>
                    <hr/>
                    <div className={styles.search}>
                        <Ingredients
                            toggleList={() => setVisible("ingredients")}
                            active={activeList === "ingredients"}
                            ingredients={Array.from(ingredients)}
                        />
                        <Categories
                            toggleList={() => setVisible("categories")}
                            active={activeList === "categories"}
                            ingredients={Array.from(categories)}
                        />
                        <Filters
                            toggleList={() => setVisible("filters")}
                            active={activeList === "filters"}
                            ingredients={Array.from(filters)}
                        />
                        <Sizes
                            toggleList={() => setVisible("sizes")}
                            active={activeList === "sizes"}
                            ingredients={Array.from(sizes)}
                        />
                        <Button
                            onClick={search}
                            color="secondary"
                            variant="contained"
                            className={styles.button}
                        >
                            Szukaj
                        </Button>
                    </div>
                    <hr/>
                </div>
            </Container>
            <div className={styles.list}>
                <Container>
                    <div className={[showIngredients, styles.listGrid].join(" ")}>
                        <FormGroup>{ingredientsList}</FormGroup>
                    </div>
                    <div className={[showCategories, styles.listGrid].join(" ")}>
                        <div></div>
                        <FormGroup>{categoriesList}</FormGroup>
                    </div>
                    <div className={[showFilters, styles.listGrid].join(" ")}>
                        <div></div>
                        <div></div>
                        <FormGroup>{filtersList}</FormGroup>
                    </div>
                    <div className={[showSizes, styles.listGrid].join(" ")}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <FormGroup>{sizesList}</FormGroup>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Search;
