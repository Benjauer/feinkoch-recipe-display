import React from 'react';

import styles from './PaxInput.module.scss';
import { PaxInputProps } from '../PaxInputWrapper/PaxInputWrapper';



const PaxInput: React.FC<PaxInputProps> = (props) => {

    const { peopleAttending } = props;
    const { setPeopleAttending } = props;


    // reduce PAX

    const decreasePax = (e: Event) => {
        e.preventDefault()

        const newState = peopleAttending - 1
        setPeopleAttending(newState)
        console.log(newState)
    }

    // increase PAX

    const increasePax = (e: Event) => {
        e.preventDefault()

        const newState = peopleAttending + 1
        setPeopleAttending(newState)
        console.log(newState)
    }


    // track changes

    const trackChanges = (e: Event) => {
        e.preventDefault()

        const newState = e.target.value
        setPeopleAttending(newState)
    }




    return (
        <div className={styles.PaxInputParent}>

            <form>

                <button
                    className={styles.plusMinusButton}
                    onClick={decreasePax}
                >-</button>

                <input
                    type='number'
                    className={styles.paxInputInput}
                    defaultValue={peopleAttending}
                    onChange={trackChanges}
                />

                <button
                    className={styles.plusMinusButton}
                    onClick={increasePax}
                >+</button>

            </form>
        </div>
    )
}

export default PaxInput;