import React from 'react';
import {useWizard} from 'react-use-wizard';
import Step from './Step';


function StepThree(props) {
    const { isLoading, handleStep, previousStep, nextStep } = useWizard()

    return (
        <div className=' border border-black'>
        {
            <Step/>
        }
        </div>
    );
}

export default StepThree;