import View from './view.jsx'
import React from 'react'

const onclick = () => {
    alert("hakuna matata")
}

const onclick2 = () => {
    alert("hakuna matata2")
}

const clickFunctions = {
    onclick: onclick,
    onclick2: onclick2
}

const Controller = () => {

    return <View onClickFunction={clickFunctions} />
}

export default Controller