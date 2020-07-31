import React from 'react';

import styles from './IngredientWrapper.module.scss';

import PaxInputWrapper from '../PaxInputWrapper/PaxInputWrapper';
import IngredientList from '../IngredientList/IngredientList';

export interface IngredientProps {
    ingredients: { name: string; amount: string; unit: string; image: string; description: string; }[]
    peopleAttending: number;
    setPeopleAttending: React.Dispatch<React.SetStateAction<number>>;
}


const IngredientWrapper: React.FC<IngredientProps> = (props) => {

    const { ingredients } = props;
    const { peopleAttending } = props;
    const { setPeopleAttending } = props;



    return (
        <div className={styles.IngredientWrapperParent}>

            <div className={styles.recipeNameParent}>
                <p className={styles.recipeName}>RecipeName</p>
            </div>

            <PaxInputWrapper
                peopleAttending={peopleAttending}
                setPeopleAttending={setPeopleAttending}
            />

            <IngredientList
                ingredients={ingredients}
                peopleAttending={peopleAttending}
            />
        </div>
    )
}

export default IngredientWrapper;