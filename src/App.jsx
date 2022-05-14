import React, { useRef, useState } from 'react'
import './App.css'
import Proptypes from 'prop-types'

const Boton = ({ text, click, clas }) => (
  <button type="button" className={clas} onClick={click}>
    {text}
  </button>
)

const App = () => {
  const [pantalla, setPantalla] = useState(0)
  const [todo, setTodo] = useState(['0', '', ''])
  const res = useRef(0)
  const botones = ['AC', 'C', '+/-', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '%', '.', '=']

  const verificar = (resp) => {
    if (resp.toString().length > 9) {
      setPantalla('ERROR')
      return 'ERROR'
    }
    setPantalla(resp)
    return resp
  }

  const operar = () => {
    const pri = todo[0]
    const sec = todo[2]

    if (todo[1] === '+') {
      res.current = (parseFloat(pri, 10) + parseFloat(sec, 10))
    } else if (todo[1] === '-') {
      res.current = (parseFloat(pri, 10) - parseFloat(sec, 10))
    } else if (todo[1] === 'X') {
      res.current = (parseFloat(pri, 10) * parseFloat(sec, 10))
    } else if (todo[1] === '%') {
      res.current = (parseFloat(pri, 10) % parseFloat(sec, 10))
    } else if (todo[1] === '/') {
      res.current = (parseFloat(pri, 10) / parseFloat(sec, 10))
      res.current = res.current.toString().substring(0, 9)
    }
    const respuesta = verificar(res.current)
    return (respuesta)
  }

  const setbotones = (valor) => {
    console.log(todo)
    if (valor === 'C') {
      if (todo[1] !== '') {
        setTodo([todo[0], todo[1], '0'])
        setPantalla('0')
      } else {
        setTodo(['0', todo[1], todo[2]])
        setPantalla('0')
      }
    } else if (valor === 'AC') {
      setTodo(['0', '', ''])
      setPantalla('0')
    } else if (valor === '+/-') {
      if (todo[0] !== '0' && todo[1] === '' && todo[2] === '') {
        const men = parseFloat(pantalla)
        const cambio = men * -1
        const yaesta = verificar(cambio)
        setPantalla(yaesta)
        setTodo([yaesta, todo[1], todo[2]])
      } else if (todo[0] !== '0' && todo[1] !== '' && todo[2] !== '') {
        const men = parseFloat(pantalla)
        const cambio = men * -1
        const yaesta = verificar(cambio)
        setPantalla(yaesta)
        setTodo([todo[0], todo[1], yaesta])
      }
    } else if (valor === '.') {
      if (!pantalla.includes('.')) {
        setPantalla(pantalla + valor)
      }
    } else if (todo[1] !== '') {
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(valor) && todo[2].length < 9) {
        if (todo[2] === '' || todo[2] === '0') {
          setPantalla(valor)
          setTodo([todo[0], todo[1], valor])
        } else if (todo[2] !== '' || todo[2] !== '0') {
          setPantalla(pantalla + valor)
          setTodo([todo[0], todo[1], pantalla + valor])
        }
      } else if (['+', '-', '/', 'X', '%'].includes(valor)) {
        if (todo[0] !== 0 && todo[2] !== '') {
          const fin = operar()
          setPantalla(fin)
          setTodo([fin, valor, ''])
        } else {
          setTodo([todo[0], valor, todo[2]])
        }
      } else if (valor === '=') {
        const fin = operar()
        setPantalla(fin)
        setTodo([fin, '', ''])
      }
    } else if (['+', '-', '/', 'X', '%'].includes(valor)) {
      setTodo([todo[0], valor, todo[2]])
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(valor) && `${pantalla}`.length < 9) {
      if (todo[0] === '' || todo[0] === '0') {
        setPantalla(valor)
        setTodo([valor, todo[1], ''])
      } else if (todo[0] !== '' || todo[0] !== '0') {
        setPantalla(pantalla + valor)
        setTodo([pantalla + valor, todo[1], todo[2]])
      }
    }
  }

  return (
    <div className="Cont">
      <div className="calcu">
        <div className="pantalla">
          <div className="resp">{pantalla}</div>
        </div>
        <div className="contada">
          {botones.map((index) => (
            ((index !== '=') ? <Boton text={index} click={() => setbotones(index)} key={index} clas="bot" /> : <Boton text={index} click={() => setbotones(index)} key={index} clas="bot1" />)
          )) }
        </div>
      </div>
    </div>
  )
}

Boton.propTypes = {
  text: Proptypes.node.isRequired,
  click: Proptypes.func.isRequired,
  clas: Proptypes.string.isRequired,
}

export default App
