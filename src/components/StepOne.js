import React, { useState } from 'react';
import {useWizard} from 'react-use-wizard';
import '../styles/style.css'
import Step from './Step';


function StepOne(props) {
    const {  handleStep, previousStep, nextStep, activeStep } = useWizard()
    const [isLoading, setIsLoading] = useState(false)


    return (
        <>
            {
                 <Step/>
            }
        </>
    );
}

export default StepOne;