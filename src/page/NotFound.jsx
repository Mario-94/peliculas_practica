import React, { Component } from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
export  class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>404!</h1>
                <h2 className='subtitle'>No existe</h2>
                <ButtonBackToHome/> 
            </div>
        )
    }
}
