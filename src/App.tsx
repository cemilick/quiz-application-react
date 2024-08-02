import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, changePage, resetForm } from './redux/reducers/surveyReducer'
import Radio from './components/Radio'
import { survey } from './utils/constant'
import { randomColorNumber } from './utils/functions'

function App() {
  const { dataForm, lastNumber } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid', borderRadius: 10, padding: '3vw' }}>
      <div style={{
        position: 'relative',
        border: '1px solid',
        borderRadius: '3vw',
        width: '5vw',
        height: '5vw',
        textAlign: 'center',
        fontSize: '3.2vw',
        backgroundColor: randomColorNumber(),
        left: '46%',
        top: 0,
      }}>{lastNumber + 1}</div>
      <h1 style={{ fontSize: '4vw' }}>{survey[lastNumber].question}</h1>
      <Radio
        key={dataForm[lastNumber]}
        required={true}
        name={"survey#" + lastNumber}
        options={survey[lastNumber].options}
        defaultValue={dataForm[lastNumber]}
        onChange={(value) => dispatch(changeAnswer({ index: lastNumber, answer: value }))}
      />
      <div style={{ marginTop: '3vw', display: 'flex', justifyContent: 'center', gap: '20vw' }}>
        <button style={{ fontSize: '2vw', backgroundColor: 'red' }} onClick={() => dispatch(resetForm())}>Reset</button>
        {lastNumber === (survey.length - 1) ? (
          <button style={{ fontSize: '2vw', backgroundColor: 'limegreen' }} onClick={() => dispatch(changePage(0))}>Submit</button>
        ) : (
          <button style={{ fontSize: '2vw', backgroundColor: 'limegreen' }} onClick={() => dispatch(changePage(lastNumber + 1))}>Next</button>
        )}
      </div>
    </div>
  )
}

export default App
