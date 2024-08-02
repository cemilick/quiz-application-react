import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, resetForm } from './redux/reducers/surveyReducer'

function App() {
  const counts = useSelector((state: any) => state.dataForm);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counts[0]);
  }, [counts]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(changeAnswer({ index: 0, answer: (counts[0] + 1) }))}>
          count is {counts[0]}
        </button>
        <button onClick={() => dispatch(resetForm())}>Reset Form</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
