import React from 'react';
import {useWizard} from 'react-use-wizard';
import '../styles/style.css'

function StepOne(props) {
    const { handleStep, previousStep, nextStep, activeStep } = useWizard()

    handleStep(() => {
        

    })

    return (
        <div className='w-full bg-gray-300 text-black border border-black p-4 text-center'>
            <h1  className='text-2xl'>This is Step One</h1>
            <div className='flex flex-rows justify-between'>
                <button  className='border border-black bg-gray-600 text-white' onClick={() => {previousStep()}}>Previous</button>
                <button className='border border-black bg-gray-600 text-white' onClick={() => {nextStep()}}>Next</button>
            </div>
        </div>
    );
}

export default StepOne;