import React from 'react';
import '../styles/style.css'
import {useWizard} from 'react-use-wizard';
import Step from './Step';


function StepTwo({isVisible}) {
    const { isLoading, handleStep, previousStep, nextStep } = useWizard()

    return (
    
        <div
            className=' border border-black '>
           {
             <Step/>
            }
        </div>
       
       
    );
}

export default StepTwo;