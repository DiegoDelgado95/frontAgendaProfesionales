import React, {Component}  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const profesionales = [{
    nombre: 'Diego',
    apellido: 'Delgado',
    profesion: 'Ingeniero',
    matricula: 'MN0427',
    id: '1'
}]

export default class HoraDisponible extends Component {
    constructor(props){
        super(props)
        this.state={
            horaInicio: '',
            horaFin: '',
            turno: '',
            fecha: '',
            profesionalesDisponibles: [],
            buscadorTurnoVisible: false,
        }
    }

    componentDidMount(){
        this.setState({profesionalesDisponibles: profesionales})
    }

    _handleOnChangeFecha= e => {
       this.setState({[e.target.name]: e.target.value})
    }

    _handleOnChangeHora = e => {
        switch (e.target.value) {
            case '1':
                this.setState({
                turno: e.target.value, 
                horaInicio: '9:00',
                horaFin: '9:30'})
                break;
            case '2':
                this.setState({
                turno: e.target.value, 
                horaInicio: '9:30',
                horaFin: '10:00'})
                break;
            case '3':
                this.setState({
                turno: e.target.value, 
                horaInicio: '10:00',
                horaFin: '10:30'})
                break; 
            case '4':
                this.setState({
                turno: e.target.value, 
                horaInicio: '10:30',
                horaFin: '11:00'})
                break;
            case '5':
                this.setState({
                turno: e.target.value, 
                horaInicio: '11:00',
                horaFin: '11:30'})
                break;
            case '6':
                this.setState({
                turno: e.target.value, 
                horaInicio: '11:30',
                horaFin: '12:00'})
                break;           
            default:
                this.setState({
                turno: '', 
                horaInicio: '',
                horaFin: ''})
                break;
        }
        
    }

    _onSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <button className="btn btn-light collapsed" onClick={() => this.setState({ buscadorTurnoVisible: !this.state.buscadorTurnoVisible })}>
                        <h3><FontAwesomeIcon icon={faCaretRight} /> Buscar Turno Disponible</h3>
                    </button>
                    {
                        this.state.buscadorTurnoVisible === true
                            ?
                            <div id="buscador">
                                <form onSubmit={this._onSubmit}>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <div className="form-group ">
                                                <label>Fecha:</label>
                                                <input type="date" name="fecha" className="form-control"
                                                    onChange={this._handleOnChangeFecha}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="">Hora:</label>
                                                <select name="Hora" className="form-control" onChange={this._handleOnChangeHora}>
                                                    <option value="">-</option>
                                                    <option value="1"> 9:00 - 9:30</option>
                                                    <option value="2"> 9:30 - 10:00</option>
                                                    <option value="3">10:00 - 10:30</option>
                                                    <option value="4">10:30 - 11:00</option>
                                                    <option value="5">11:00 - 11:30</option>
                                                    <option value="6">11:30 - 12:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 m-auto">
                                            <button className="btn btn-primary ">Consultar</button>
                                        </div>
                                    </div>
                                </form>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Matricula</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Profesion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.profesionalesDisponibles.map(profesional => {
                                                return (
                                                    <tr key={profesional.id}>
                                                        <th scope="row">{profesional.matricula}</th>
                                                        <td>{profesional.nombre}</td>
                                                        <td>{profesional.apellido}</td>
                                                        <td>{profesional.profesion}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
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