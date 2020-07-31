import React from 'react';

import styles from './IngredientWrapper.module.scss';

interface IngredientWrapperProps {
    recipeArray: ({ name: string; amount: string; unit: string; image: string; description: string; } | { name: string; amount: null; unit: null; image: string; description: string; })[]
}


const IngredientWrapper: React.FC <IngredientWrapperProps> = () => {

    return <div>IngredientWrapper</div>
}

export default IngredientWrapper;