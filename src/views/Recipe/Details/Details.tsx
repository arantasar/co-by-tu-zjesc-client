import * as React from "react";
import styles from "./Details.module.scss";
import Buttons from "./Buttons/Buttons";

const Details = () => <div className={styles.details}>
    <div className="date">{new Date().toLocaleDateString()}</div>
    <h1>Spaghetti Bolognese</h1>
    <div className={styles.buttons}>
        <Buttons />
    </div>
    <div className={styles.grid}>
        <div>
            <h3>Czas przygotowania</h3>
            <p>30 minut</p>
        </div>
        <div>
            <h3>Ilość porcji</h3>
            <p>4</p>
        </div>
    </div>
    <h2>Składniki</h2>
    <ul className={styles.ingredients}>
        <li className={styles.ingredient}>Składnik 1</li>
        <li className={styles.ingredient}>Składnik 2</li>
        <li className={styles.ingredient}>Składnik 3</li>
        <li className={styles.ingredient}>Składnik 4</li>
        <li className={styles.ingredient}>Składnik 5</li>
    </ul>
    <div className={styles.dsc}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            adipisci tempora aut sit dignissimos inventore minima atque commodi nemo
            blanditiis repudiandae officia veniam, sunt, ipsum, obcaecati laudantium
            vero fugiat. Eum!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            adipisci tempora aut sit dignissimos inventore minima atque commodi nemo
            blanditiis repudiandae officia veniam, sunt, ipsum, obcaecati laudantium
            vero fugiat. Eum!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            adipisci tempora aut sit dignissimos inventore minima atque commodi nemo
            blanditiis repudiandae officia veniam, sunt, ipsum, obcaecati laudantium
            vero fugiat. Eum!
        </p>
    </div>
</div>;

export default Details;
