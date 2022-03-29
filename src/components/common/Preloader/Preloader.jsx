import React from 'react'
import preloader from './../../../assets/images/preloader.gif'

const Preloader = (props) => {
    return (
        <div style={{ width: 50 }}>
            <img src={preloader} alt="preloader" />
        </div>

    )
}

export default Preloader