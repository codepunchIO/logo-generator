import Stepper from '@mui/material/Stepper'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import menuImg from '../../assets/img/menu.svg'
import Style from '../../components/Style/Style'
import Industry from '../Industry'
import StartPage from '../Start'
import NameEditor from '../../components/NameEditor/NameEditor'

const steps = ['Name', 'Industry', 'Style', 'Colors', 'Fonts', 'Icon']
const components = [<NameEditor />, <Industry />, <Style />, []]

const GeneratorPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <main className="h-full flex flex-col">
      <Stepper nonLinear activeStep={activeStep}>
        <img src={menuImg} alt="logo" />
        {steps.map((label, index) => (
          <StepButton color="inherit" onClick={handleStep(index)}>
            {label}
          </StepButton>
        ))}
      </Stepper>
      <div className="border-sky-500 h-full flex-col justify-evenly">
        {allStepsCompleted() ? (
          <>
            <div>All steps completed - you&apos;re finished</div>
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </>
        ) : (
          // <div className="flex flex-col justify-center w-full h-5/4">
          <div className="">
            <div>{components[activeStep]}</div>
            <div className="fixed bottom-0 right-0">
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleNext}>Next</Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default GeneratorPage
