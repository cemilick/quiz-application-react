import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, changePage, resetForm } from './redux/reducers/surveyReducer'
import Radio from './components/Radio'
import { survey } from './utils/constant'
import { randomColorNumber } from './utils/functions'
import { Dialog } from './components/Dialog'
import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'

function App() {
  const { dataForm, lastNumber } = useSelector((state: any) => state);
  const [isStarted, setIsStarted] = useState(false);

  const isAlreadyAnswered = dataForm[0] !== undefined;

  const dispatch = useDispatch();

  const onReset = () => {
    Dialog.confirm(() => {
      dispatch(resetForm());
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

  const Quiz = () => (
    <div className="card-wrapper">
      <div className="page-number" style={{ backgroundColor: randomColorNumber(lastNumber + 1) }}>{lastNumber + 1}</div>
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
            onClick={() => handleSubmit((data) => {
              Dialog.success(() => dispatch(resetForm()));
            })}>
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

  return isStarted ? <Quiz /> : (<WelcomePage
    onStarted={() => setIsStarted(true)}
    isContinue={isAlreadyAnswered}
  />);
}

export default App
