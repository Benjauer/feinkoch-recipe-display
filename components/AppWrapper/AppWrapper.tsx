import React from 'react';
import styles from './AppWrapper.module.scss';

import HeadlinePictureWrapper from '../HeadlinePictureWrapper/HeadlinePictureWrapper';
import IngredientWrapper from '../IngredientWrapper/IngredientWrapper';

const AppWrapper: React.FC = () => {

    const recipeArray = [
        {
            name: "Sushireis",
            amount: "100",
            unit: "g",
            image: "https://files.billa.at/files/artikel/00-426270_01__1200x1200.jpg",
            description: "You can use this to make sushi!"
        },

        {
            name: "Erdnüsse",
            amount: null,
            unit: null,
            image: "https://files.billa.at/files/artikel/00-373552_01__1200x1200.jpg",
            description: "I had an ex-girlfriend that was allergic to these so I spent years without eating them."
        }
    ]

    // split array in recipe and ingredients

    const recipe = recipeArray[0]

    recipeArray.shift()

    const ingredients = recipeArray


    return (
        <div className={styles.AppWrapperParent}>

            <div className={styles.HeadlinePictureParent}>
                <HeadlinePictureWrapper />
            </div>


            <IngredientWrapper recipe={recipe} ingredients={ingredients} />


        </div>
    )
}

export default AppWrapper;