import React, { useState } from 'react'
import styled from 'styled-components'

const TestComp = styled.div`
    width: 100%;
    height: 10rem;
    background-color: purple;
`
const ButtonTest = styled.button`
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: pink;
`

const InputForm = styled.input`
    height: 2rem;
    width: 40%;
    border: none;
    outline: none;
    border-radius: .5rem;
`
function Test() {
    // const [isToggle,setToggle] = useState(false)
    // const handlerToggle = ()=>{
    //     setToggle(!isToggle)
    // }
    //Ej onChange
    // const [value,setValue] = useState()
    // const handleValue = (e)=>{
    //     setValue(e.target.value)
    // }
    //Ej onSubmit
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert("FormEnviado")
    }
  return (
    <TestComp>
        {/* {isToggle ? <span>True</span> : <span>False</span>}
        <ButtonTest onClick={handlerToggle}>Toggle</ButtonTest> */}
        {/* <InputForm onChange={handleValue} />
        <p>{value || "Input está vacio"}</p> */}

        <form action="" onSubmit={handleSubmit}>
            <ButtonTest>Enviuar</ButtonTest>
        </form>
    </TestComp>
  )
}

export default Test