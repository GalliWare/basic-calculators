import React, { useState } from 'react'

function Calculator () {
  const [total, setTotal] = useState('')
  const [textInput, setTextInput] = useState(0)
  return (
    <div className='Calculator'>
      <h3>{total}</h3>
      <input type="number" value={textInput} onChange={(event) => { setTextInput(event.target.value) }}></input><br></br>
      <button onClick={() => { setTotal(+total + +textInput); setTextInput('') }}>Plus</button>
      <button onClick={() => { setTotal(total - textInput); setTextInput('') }}>Minus</button>
      <button onClick={() => { setTotal(total * textInput); setTextInput('') }}>Multiple</button>
      <button onClick={() => { setTotal(total / textInput); setTextInput('') }}>Divide</button>
      <button onClick={() => { setTotal(0); setTextInput('') }}>Clear</button>
    </div>
  )
}

export default Calculator