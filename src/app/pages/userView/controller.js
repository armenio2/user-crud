import View from './view.jsx'
import React from 'react'

const onclick = () => {
    alert("hakuna matata")
}

const Controller = () => {

    return <View onClickFunction={onclick} />
}

export default Controller