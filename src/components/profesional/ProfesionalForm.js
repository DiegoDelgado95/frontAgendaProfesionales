import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class ProfesionalForm extends Component {

    handleChange = e => {
        this.props.onChangeInput(e.target.name, e.target.value)
    }

    handleOnSubmit = e => {
        this.props.onSubmit(e)
    }

    handleOnUpload = e => {
        this.props.onUpload(e)
    }

    isEnabled = () => {
        const { nombre, apellido, profesion, matricula } = this.props.estado
        return (
            nombre.length > 2 &&
            apellido.length > 2 &&
            profesion.length > 4 &&
            matricula.length > 4
        );
    }

    render() {
        const { nombre, apellido, profesion, matricula, id } = this.props.estado
        return (
            <form onSubmit={this.props.estado.id === '' ? this.handleOnSubmit : this.handleOnUpload} id="form">
                <div className="card">
                    {
                        id === ''
                        ?
                        <div className="card-header text-center">
                            <h2>Nuevo</h2>
                        </div>
                        :
                        <div className="card-header text-center">
                            <div className="d-flex">
                            <h2>Actualizar</h2>
                                <button className="ml-auto btn btn-success" onClick={() => this.props.empty()}>
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </button>
                            </div>
                        </div>
                    }
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre: </label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej: Diego..." required
                                onChange={this.handleChange}
                                value={nombre} 
                               />
                        </div>
                        <div className="form-group">
                            <label>Apellido: </label>
                            <input type="text" name="apellido" className="form-control" placeholder="Ej: Delgado..." required
                                onChange={this.handleChange}
                                value={apellido} 
                                />
                        </div>
                        <div className="form-group">
                            <label>Profesion: </label>
                            <input type="text" name="profesion" className="form-control" placeholder="Ej: Ingniero..." required
                                onChange={this.handleChange}
                                value={profesion} 
                                />
                        </div>
                        <div className="form-group">
                            <label>Matricula: </label>
                            <input type="text" name="matricula" className="form-control" placeholder="Ej: MN0427..." required
                                onChange={this.handleChange}
                                value={matricula} 
                                />
                        </div>
                        {
                            this.props.estado.id === '' 
                            ?
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={!this.isEnabled()} >Enviar</button>
                            </div>
                            :
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={!this.isEnabled()} >Actualizar</button>
                            </div>
                        }
                    </div>
                </div>
            </form>
        )
    }
}

export default ProfesionalForm;