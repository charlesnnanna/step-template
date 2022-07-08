import React from 'react';
import {useWizard} from 'react-use-wizard';


function StepThree(props) {
    const { handleStep, previousStep, nextStep } = useWizard()

    return (
        <div className='w-full bg-gray-300 text-black border border-black p-4 text-center'>
        <h1  className='text-2xl'>This is Step Three</h1>
        <div className='flex flex-rows justify-between'>
            <button  className='border border-black bg-gray-600 text-white' onClick={() => {previousStep()}}>Previous</button>
            <button className='border border-black bg-gray-600 text-white' onClick={() => {nextStep()}}>Next</button>
        </div>
        <div>
            <h2>The third Step</h2>
            <p>Lorem ipsum donor</p>
            <p>Lorem ipsum donor</p>
            <p>Lorem ipsum donor</p>
            <p>Lorem ipsum donor</p>
        </div>
    </div>
    );
}

export default StepThree;