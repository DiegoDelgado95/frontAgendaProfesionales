import React, {Component} from 'react'

import ProfesionalForm from './ProfesionalForm'
import Listado from './Listado'

export class Profesional extends Component{
    constructor(props){
        super(props)
        this.state = {
            profesionales: []
        }
    }

    allProfesiona(){
        fetch('http://localhost:8080/api/profesional')
            .then(res => res.json())
            .then(data => {
                this.setState({ profesionales: data })
                console.log(this.state.profesionales);
            })
    }

    componentDidMount(){
        this.allProfesiona();
    }

    render(){
        return(
            <div>
                <h2 className="bg-dark text-center text-white p-3">Profesionales</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <ProfesionalForm profesionales={this.allProfesiona} />
                        </div>
                        <div className="col-md-7">
                            <Listado profesionales={this.state.profesionales}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}