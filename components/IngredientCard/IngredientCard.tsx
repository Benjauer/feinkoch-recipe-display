import React from 'react';

import styles from './IngredientCard.module.scss'

interface IngredientCardProps {
    item: { name: string; amount: string; unit: string; image: string; description: string; }[]
    peopleAttending: number;
}

const IngredientCard: React.FC<IngredientCardProps> = (props) => {

    const { item } = props;
    const { peopleAttending } = props;


    return (
        <div className={styles.IngredientCardParent}>

            <img
                src={item.image}
                className={styles.IngredientImage}
            />

            <div className={styles.IngredientCardText}>
                <p>{parseInt(item.amount) * peopleAttending}</p>
                <p>{item.unit}</p>
            </div>

        </div>
    )
}

export default IngredientCard;