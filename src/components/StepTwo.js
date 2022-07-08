import React from 'react';
import '../styles/style.css'
import {useWizard} from 'react-use-wizard';
import { AnimatePresence, motion } from 'framer-motion';


function StepTwo({isVisible}) {
    const { handleStep, previousStep, nextStep } = useWizard()

    return (
    
        <div
            className=' w-full bg-gray-200 text-black border border-black p-4 text-center'>
            <h1  className='text-3xl'>This is Step Two</h1>
            <div className='flex flex-rows justify-between'>
                <button  className='border border-black bg-gray-600 text-white' onClick={() => {previousStep()}}>Previous</button>
                <button className='border border-black bg-gray-600 text-white' onClick={() => {nextStep()}}>Next</button>
            </div>
            <div>
                <p>Hello Lorem ipsum donor</p>
                <p>Hello Lorem ipsum donor</p>
                <p>Hello Lorem ipsum donor</p>
                <p>Hello Lorem ipsum donor</p>
                <p>Hello Lorem ipsum donor</p>

            </div>
        </div>
       
       
    );
}

export default StepTwo;