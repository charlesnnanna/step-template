import React from 'react';
import { Wizard , useWizard } from 'react-use-wizard';
import {AnimatePresence, motion} from 'framer-motion'
import Footer from './components/Footer';
import Header from './components/Header';
import StepOne from './components/StepOne';
import StepThree from './components/StepThree';
import StepTwo from './components/StepTwo';



const Wrapper = () => {
  return (
    <AnimatePresence>
     (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )
  </AnimatePresence>
  )
}
function App() {

  return (
    <div>
    
          <Wizard startIndex={0}
                    header = {<Header/>}
                    footer = {<Footer/>}
                    >
                <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x:0}}
                exit={{ opacity: 0 }}
                transition={{ 
                }}
                >
                       <StepOne/>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x:0}}
                exit={{ opacity: 0 }}
                transition={{ 
                }}
                >
                       <StepTwo/>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x:0}}
                exit={{ opacity: 0 }}
                transition={{ 
                }}
                >
                       <StepThree/>
                </motion.div>
            </Wizard>
    
        
    </div>
  );
}

export default App;
