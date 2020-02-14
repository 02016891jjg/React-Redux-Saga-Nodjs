import React from 'react'
import Header from '../header'
import Introduce from './introduce.jsx'
import './styles/style.scss'
class NewAssistant extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <React.Fragment>
              <Header onAssistant="assistant" headerClass="assitant_header"/>
              <Introduce/>
              
           </React.Fragment>
        )
    }
}
export default NewAssistant