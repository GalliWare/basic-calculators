import React, { useState } from 'react'

function Calculator () {
  const [total, setTotal] = useState(0)
  const [textInput, setTextInput] = useState('')
  const [storedOperator, setStoredOperator] = useState('')
  const buttonsValues = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', '00', '000', '/',
  ]
  let buttons = []

  function onClickHandler(event) {
    let valueInput = event.target.innerText
    if (valueInput <= 9 && valueInput >= 0) {
      {
        setTextInput(textInput + valueInput)
      }
    }
    else {
      if (total != 0) {
        switch (storedOperator) {
          case '+':
            setTotal(total + parseFloat(textInput))
            setTextInput('')
            break;
          case '-':
            setTotal(total - parseFloat(textInput))
            setTextInput('')
            break;
          case '*':
            setTotal(total * parseFloat(textInput))
            setTextInput('')
            break;
          case '/':
            setTotal(total / parseFloat(textInput))
            setTextInput('')
            break;
          case '00':
            setTextInput(textInput + valueInput)
            break;
          case '000':
            setTextInput(textInput + valueInput)
            break;

          default:
            break;
        }
      }
      else {
          setTotal(total + parseFloat(textInput))
          setTextInput('')
      }
      setStoredOperator(valueInput)
    }
  }

  for (let i = 0; i < buttonsValues.length; i++) {
    buttons.push(
      <button
        key={buttonsValues[i]}
        onClick={onClickHandler}>
        {buttonsValues[i]}
      </button>
    )
  }

  return (
    <div className='Calculator'>
      <h3>{total}</h3>
      <input 
        type="number" 
        value={textInput} 
        onChange={(event) => { 
          setTextInput(event.target.value) 
        }}
      />
      <br>
      </br>
      {buttons}
      <button
        onClick={
          onClickHandler
        }>
        =
      </button>
      <button
        onClick={() => {
          setTotal(0)
          setTextInput('')
        }}>
        Clear
      </button>
    </div>
  )
}

export default Calculator