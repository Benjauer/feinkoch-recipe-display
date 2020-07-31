import React from 'react';
import styles from './AppWrapper.module.scss';

import HeadlinePictureWrapper from '../HeadlinePictureWrapper/HeadlinePictureWrapper';
import IngredientWrapper from '../IngredientWrapper/IngredientWrapper';

const AppWrapper: React.FC = () => {

    return (
        <div className={styles.AppWrapperParent}>

            <div className={styles.HeadlinePictureParent}>
                <HeadlinePictureWrapper />
            </div>

            <div>
                <IngredientWrapper />
            </div>
        </div>
    )
}

export default AppWrapper;