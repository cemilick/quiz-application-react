import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, changePage, resetAll } from './redux/reducers/surveyReducer'
import Radio from './components/Radio'
import { survey } from './utils/constant'
import { calculateFinalScore, randomColorNumber } from './utils/functions'
import { Dialog } from './components/Dialog'
import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'
import Timer from './components/Timer'
import Completionist from './components/Completionist'
import { BarLoader } from 'react-spinners'

function App() {
  const { dataForm, lastNumber, minutes, seconds } = useSelector((state: any) => state);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [timesUp, setTimesUp] = useState(false);

  const isAlreadyAnswered = dataForm[0] !== undefined;

  const dispatch = useDispatch();

  const onReset = () => {
    Dialog.confirm(() => {
      dispatch(resetAll());
      setIsStarted(false);
    });
  }

  const handleSubmit = (onSuccess: (data: any) => void) => {
    if (dataForm[lastNumber] === undefined) {
      Dialog.alert("Please select an option!");
      return;
    }

    onSuccess(dataForm[lastNumber]);
  }

  const submitAction = async (data: any) => {
    setIsLoading(true);
    setScore(calculateFinalScore(dataForm));
    setTimeout(() => {
      setIsLoading(false);
      setIsFinish(true);
      dispatch(resetAll());
      setIsStarted(false);
    }, 2000);
  }

  const onStarted = async () => {
    setIsLoading(true);

    if (!isAlreadyAnswered) {
      dispatch(resetAll());
    }

    setTimeout(() => {
      setIsStarted(true);
      setIsLoading(false);
    }, 2000);
  }

  const Quiz = () => (
    <div className="card-wrapper">
      <div className="d-flex justify-between">
        <div className="page-number" style={{ backgroundColor: randomColorNumber(lastNumber + 1) }}>{lastNumber + 1}</div>
        <Timer time={(minutes * 1000 * 60) + (seconds * 1000)} onTimesUp={setTimesUp} />
      </div>
      <h1 className="title">{survey[lastNumber].question}</h1>
      <Radio
        key={dataForm[lastNumber]}
        required={true}
        name={"survey#" + lastNumber}
        options={survey[lastNumber].options}
        defaultValue={dataForm[lastNumber]}
        onChange={(value) => dispatch(changeAnswer({ index: lastNumber, answer: value }))}
      />
      <div className="button-wrapper">
        <button className="btn btn-danger" onClick={onReset}>Reset</button>
        {lastNumber === (survey.length - 1) ? (
          <button
            className="btn btn-success"
            onClick={() => handleSubmit(submitAction)}>
            Submit
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleSubmit((data) => dispatch(changePage(lastNumber + 1)))}>
            Next
          </button>
        )}
      </div>
    </div>
  );

  if (isFinish || timesUp) {
    return <Completionist score={score} isTimesUp={timesUp} />;
  } else if (isLoading) {
    return <BarLoader width={'70vw'} color='white' />;
  } else if (isStarted) {
    return <Quiz />;
  } else {
    return (<WelcomePage
      onStarted={onStarted}
      isContinue={isAlreadyAnswered}
    />);
  }
}

export default App
