import React from 'react';

import styles from './HeadlinePictureWrapper.module.scss';
import { IngredientProps } from '../IngredientWrapper/IngredientWrapper';

import IngredientCard from '../IngredientCard/IngredientCard';

const HeadlinePictureWrapper: React.FC<IngredientProps> = (props) => {

    const { recipe } = props;
    const { ingredients } = props;
    const { peopleAttending } = props;
    // const { setPeopleAttending } = props;


    return (
        <div className={styles.HeadlinePictureWrapperParent}>

            <p className={styles.HeadlinePictureWrapperHeadline}>{recipe.name}</p>

            {
                ingredients.map((item, index) => (
                    <IngredientCard
                        item={item}
                        key={index}
                        peopleAttending={peopleAttending}
                    />
                ))
            }
        </div>
    )
}

export default HeadlinePictureWrapper;