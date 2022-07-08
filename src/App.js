import React from 'react';
import { Wizard , useWizard } from 'react-use-wizard';
import {AnimatePresence} from 'framer-motion'
import Footer from './components/Footer';
import Header from './components/Header';
import StepOne from './components/StepOne';
import StepThree from './components/StepThree';
import StepTwo from './components/StepTwo';



const Wrapper = () => {
  return <AnimatePresence initial={false} exitBeforeEnter/>
}
function App() {

  return (
    <div>
    
          <Wizard startIndex={0}
                    header = {<Header/>}
                    footer = {<Footer/>}
                    wrapper = {<AnimatePresence initial={false} exitBeforeEnter/>}>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </Wizard>
    
        
    </div>
  );
}

export default App;
