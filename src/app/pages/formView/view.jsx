import React from 'react'

const FormView = (props) => {
    return (
        <div>
            <p onClick={props.onClickFunction.onclick}>form view</p>
            <p onClick={props.onClickFunction.onclick2}> user click 2</p>
        </div>
    )
}

export default FormView