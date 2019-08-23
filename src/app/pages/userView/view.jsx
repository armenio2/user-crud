import React from 'react'

const UserView = (props) => {
    return (
        <div>
            <p onClick={props.onClickFunction.onclick}>user view</p>
            <p onClick={props.onClickFunction.onclick2}> user click 2</p>
        </div>
    )
}

export default UserView