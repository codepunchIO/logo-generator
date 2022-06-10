import Button from '@mui/material/Button'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import menuImg from '../../assets/img/menu.svg'
import NameEditor from '../../components/NameEditor/NameEditor'
import Style from '../../components/Style/Style'
import Industry from '../../components/Industry'
import Colors from '../../components/Colors/Colors'
import NewColors from '../../components/NewColors/NewColors'
import Fonts from '../../components/Fonts/Fonts'
import { NavLink } from 'react-router-dom'
import Icons from '../../components/Icons/index'
import {
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  styled,
} from '@mui/material'
import { Check } from '@mui/icons-material'
const steps = ['Name', 'Industry', 'Style', 'Colors', 'Fonts', 'Icon']
const components = [
  <NameEditor />,
  <Industry />,
  <Style />,
  <NewColors />,
  <Fonts />,
  <Icons />,
  [],
]

const GeneratorPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({})

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

  ////STYLES
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#22c55e',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }))
  ////STYLES

  ////STYLES
  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#22c55e',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#22c55e',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    }),
  )
  ////STYLES

  ////STYLES
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }))
  ////STYLES

  ////STYLES
  const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean }
  }>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }))
  ////STYLES

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    )
  }
  return (
    <main className="h-full flex flex-col">
      <Stack sx={{ width: '100%' }} spacing={4}></Stack>
      <div className="px-24 py-4 flex border justify-between">
        <img src={menuImg} alt="logo" className="w-12 h-12 my-auto" />
        <div>
          <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>

          <Stepper nonLinear activeStep={activeStep} sx={{ width: '600px' }}>
            {steps.map((label, index) => (
              <StepButton color="inherit" key={index} onClick={handleStep(index)}>
                {label}
              </StepButton>
            ))}
          </Stepper>
        </div>
        <div className="my-auto mr-10">
          <h1>X</h1>
        </div>
      </div>

      <div className="border-sky-500 h-full flex-col justify-evenly">
        {allStepsCompleted() ? (
          <>
            <div>All steps completed - you&apos;re finished</div>
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </>
        ) : (
          // <div className="flex Oflex-col justify-center w-full h-5/4">
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
                    {completedSteps() === totalSteps() - 1 ? (
                      <NavLink to="/editor">Finish'</NavLink>
                    ) : (
                      'Complete Step'
                    )}
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
