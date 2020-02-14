
import React from 'react'
import './style.scss'

class TestLoading extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="t_dl">
             <div class="t_dl__container">
             <div class="t_dl__corner--top"></div>
             <div class="t_dl__corner--bottom"></div>
             </div>
            <div class="t_dl__square"></div>
        </div>
        )
    }

}

export default TestLoading;