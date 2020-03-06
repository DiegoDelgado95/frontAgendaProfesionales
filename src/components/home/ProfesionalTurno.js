import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class ProfesionalTurno extends Component {
    constructor(props){
        super(props)
        this.state={
            buscadorProfesionalVisible: false,
            fecha: '',
            profesion: '',
            idProfesional: '',
            nroMatricula: ''
        }
    }

    _onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="container">
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <button className="btn btn-light collapsed" onClick={() => this.setState({ buscadorProfesionalVisible: !this.state.buscadorProfesionalVisible })}>
                        <h3><FontAwesomeIcon icon={faCaretRight} /> Profesional Turnos</h3>
                    </button>
                    {
                        this.state.buscadorProfesionalVisible === true
                        ?
                        <div className="row mt-2">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Fecha: </label>
                                    <input type="date" className="form-control" name="fecha"
                                        onChange={this._onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Profesion: </label>
                                    <select className="form-control" name="profesion" onChange={this._onChange}>
                                        <option value="">-</option>
                                        <option value="Psicologo">Psicologo</option>
                                        <option value="Nutricion">Nutricion</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Profesional: </label>
                                    <div className="input-group">
                                        <select className="form-control" name="idProfesional" onChange={this._onChange}>
                                            <option value="">-</option>
                                            <option value="1">Delgado Diego</option>
                                            <option value="2">Valeria Delgado</option>
                                        </select>
                                        <button className="input-group-prepend btn btn-primary" >
                                            <div>
                                                <FontAwesomeIcon icon={faSearch}/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="form-group">
                                <label>Nro. Matricula: </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="MN0427..." name="nroMatricula" onChange={this._onChange}/>
                                        <button className="input-group-prepend btn btn-primary" >
                                            <div>
                                                <FontAwesomeIcon icon={faSearch}/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>
            </div>
        )
    }
}