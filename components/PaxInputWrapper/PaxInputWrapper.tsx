import React from 'react';

import styles from './PaxInputWrapper.module.scss';

import PaxInput from '../PaxInput/PaxInput';

export interface PaxInputProps {
    peopleAttending: number;
    setPeopleAttending: React.Dispatch<React.SetStateAction<number>>;
}

const PaxInputWrapper: React.FC<PaxInputProps> = (props) => {

    const { peopleAttending } = props;
    const { setPeopleAttending } = props;


    return (
        <div className={styles.PaxInputWrapperParent}>

            <p>Ich koche fuer</p>

            <PaxInput
                peopleAttending={peopleAttending}
                setPeopleAttending={setPeopleAttending}
            />

            <p>Personen</p>
        </div>
    )
}

export default PaxInputWrapper;