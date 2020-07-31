import React from 'react';

import styles from './IngredientWrapper.module.scss';

import PaxInputWrapper from '../PaxInputWrapper/PaxInputWrapper';
import IngredientList from '../IngredientList/IngredientList';

interface IngredientWrapperProps {
    recipe: { name: string; amount: string; unit: string; image: string; description: string; },
    ingredients: { name: string; amount: string; unit: string; image: string; description: string; }[]
}


const IngredientWrapper: React.FC<IngredientWrapperProps> = (props) => {

    const { recipe } = props;
    const { ingredients } = props;

    const [peopleAttending, setPeopleAttending] = React.useState(4)

    return (
        <div className={styles.IngredientWrapperParent}>

            <div className={styles.recipeNameParent}>
                <p className={styles.recipeName}>{recipe.name}</p>
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