import React, { useState } from 'react';
import {useWizard} from 'react-use-wizard';
import Loader from './Loader';


function Step(props) {

    const { isLastStep ,handleStep, goToStep, previousStep, nextStep, activeStep } = useWizard()
    const [isLoading, setIsLoading] = useState()

    const loadNextStep = () => {
        setIsLoading(true)
        setTimeout(() => {
            if (isLastStep) {
                goToStep(0)
            } else {
                nextStep()
            }
            
        }, 3000)
    }

    return (
        <>
            <div className='flex flex-cols justify-center items-center'>
                {
                    isLoading ? <Loader/> : <p>Step {activeStep}</p>
                }
            </div>
       

            <div className='flex flex-rows justify-between'>
                <button  className='border border-black bg-gray-600 text-white' onClick={() => {previousStep()}}>Previous</button>
                <button className='border border-black bg-gray-600 text-white' onClick={() => {loadNextStep()}}>Next</button>
            </div>
         
        </>
        
    );
}

export default Step;