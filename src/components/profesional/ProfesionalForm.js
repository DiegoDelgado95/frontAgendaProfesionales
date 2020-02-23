import React, {Component} from 'react'

class ProfesionalForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            profesion: '',
            matricula: '',
            id: ''
        }

        this.allProfesionales = this.props.profesionales.bind(this)
    }

    _handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    _handleOnSubmit = e => {
        e.preventDefault()
        const profesional = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            profesion: this.state.profesion,
            matricula: this.state.matricula
        }
        fetch('http://localhost:8080/api/profesional',{
                method: 'POST',
                body: JSON.stringify(profesional),
                headers: {'Accept': 'application/json', 'Content-type':'application/json'}
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.allProfesionales()
                this.inputEmpty();
            })
    }

    inputEmpty(){
        this.setState({
            nombre: '',
            apellido: '',
            profesion: '',
            matricula: ''
        })
    }

    canBeSubmitted(){
        const { nombre, apellido, profesion, matricula } = this.state
        return (
            nombre.length > 2 &&
            apellido.length > 2 &&
            profesion.length > 4 &&
            matricula.length > 4
        );
    }

    render() {
        const isEnabled = this.canBeSubmitted();

        return (
            <form onSubmit={this._handleOnSubmit}>
                <div className="card">
                    <div className="card-header text-center">
                        <h2>Nuevo</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre: </label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej: Diego..." 
                                onChange={this._handleChange}
                                value={this.state.nombre} />
                        </div>
                        <div className="form-group">
                            <label>Apellido: </label>
                            <input type="text" name="apellido" className="form-control" placeholder="Ej: Delgado..." 
                                onChange={this._handleChange} 
                                value={this.state.apellido} />
                        </div>
                        <div className="form-group">
                            <label>Profesion: </label>
                            <input type="text" name="profesion" className="form-control" placeholder="Ej: Ingniero..." 
                                onChange={this._handleChange}
                                value={this.state.profesion} />
                        </div>
                        <div className="form-group">
                            <label>Matricula: </label>
                            <input type="text" name="matricula" className="form-control" placeholder="Ej: MN0427..." 
                                onChange={this._handleChange}
                                value={this.state.matricula} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" disabled={!isEnabled}>Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ProfesionalForm;