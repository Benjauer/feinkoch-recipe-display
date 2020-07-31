import React from 'react';

import styles from './IngredientList.module.scss';

export interface IngredientListProps {
    ingredients: { name: string; amount: string; unit: string; image: string; description: string; }[];
    peopleAttending: number;
}

const IngredientList: React.FC<IngredientListProps> = (props) => {

    const { ingredients } = props;
    const { peopleAttending } = props;



    return (
        <ul className={styles.IngredientList}>
            {
                ingredients.map(item => (
                    <li className={styles.IngredientListItem}>
                        <p className={styles.IngredientListText}>{parseInt(item.amount) * peopleAttending}</p>
                        <p className={styles.IngredientListText}>{item.unit}</p>
                        <p className={styles.IngredientListText}>{item.name}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default IngredientList;