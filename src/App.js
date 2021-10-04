
import React from 'react'
import MultiStep from './index'
import StepOne from './Steps/stepOne'
import StepTwo from './Steps/stepTwo'
import StepThree from './Steps/stepThree'
import StepFour from './Steps/stepFour'
import Carousell from './components/Carousell';
import Navigation from './components/Navigation';
const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }
function App() {
  
  return (
    <div className="App">
      <Navigation></Navigation>
      <Carousell></Carousell>
      <div className='container'>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    <div className='app-footer'>
      <h6>Press 'Enter' or click on progress bar for next step.</h6>
      Code is on{' '}
    </div>
  </div>
      
    </div>
  );
}

export default App;
