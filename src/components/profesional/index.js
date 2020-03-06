import React, {Component} from 'react'

import ProfesionalForm from './ProfesionalForm'
import Listado from './Listado'
import SearchProf from './SearchProf'
import Spinner from '../Spinner'
import Paginacion from './Paginacion'

export class Profesional extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            isLoadingSearch: false,
            profesionales: [],
            searchMatricula: '',
            nombre: '',
            apellido: '',
            profesion: '',
            matricula: '',
            id: ''
        }
    }

    allProfesiona = () => {
        fetch('http://localhost:8080/api/profesional')
            .then(res => res.json())
            .then(data => {
                this.setState({ profesionales: data })
            })
    }

    componentDidMount(){
        this.allProfesiona();
        this.setState({isLoading: false})
    }

    deleteProfesional = id =>{
        fetch(`http://localhost:8080/api/profesional/${id}`, { method: 'DELETE' })
            .then(() => {
                this.allProfesiona();
            })
    }

    getProfesional = id => {
        fetch(`http://localhost:8080/api/profesional/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    profesion: data.profesion,
                    matricula: data.matricula,
                    id: data.idProfesional
                })
            })    
    }

    _uploadProfesional = e => {
        e.preventDefault();
        const { nombre, apellido, profesion, matricula, id } = this.state
        const profesional = {
            nombre,
            apellido,
            profesion,
            matricula
        }
        this.setState({isLoadingSearch: true})
        this.inputEmpty();
        fetch(`http://localhost:8080/api/profesional/${id}`, 
            {   method: 'PUT',
                body: JSON.stringify(profesional),
                headers: {'Accept': 'application/json', 'Content-type':'application/json'}
            })
            .then(res => res.json())
            .then(data => {
                this.allProfesiona()
                this.inputEmpty();
            })
        this.setState({isLoadingSearch: false})
    }

    _handleChange = (name, value) => {
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
                this.allProfesiona()
                this.inputEmpty();
            })
            
    }

    inputEmpty = () => {
        this.setState({
            nombre: '',
            apellido: '',
            profesion: '',
            matricula: '',
            id: ''
        })
    }

    _handleChangeSearch = e => {
        this.setState({searchMatricula: e.target.value})
    }

    onSubmitSearch = e => {
        e.preventDefault();
        this.setState({isLoadingSearch: true})
        const nmatricula = this.state.searchMatricula
        nmatricula !== ''
        ?
        fetch(`http://localhost:8080/api/profesional/matricula?matricula=${nmatricula}`)
            .then(res => res.json())
            .then(data => {
                this.setState({profesionales: [data], isLoadingSearch: false })
            })
        :
        this.allProfesiona();
    }

    render(){
        return(
            <div>
                <h2 className="bg-dark text-center text-white p-3">Profesionales</h2>
                <div className="container">
                        {
                            this.state.isLoading === true
                            ? 
                            <Spinner />
                            :   
                            <div className="row">
                                <div className="col-md-5">
                                    <ProfesionalForm
                                        estado={this.state}
                                        onChangeInput={this._handleChange}
                                        onSubmit={this._handleOnSubmit}
                                        onUpload={this._uploadProfesional}
                                        empty={this.inputEmpty}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <SearchProf
                                        onChangeSearch={this._handleChangeSearch}
                                        onSubmitSearch={this.onSubmitSearch} 
                                    />
                                    <Paginacion
                                        postsPerPage={this.state.postsPerPage}
                                        totalPosts={this.state.profesionales.length}
                                        paginate={this.paginate}
                                    />
                                    <Listado
                                        profesionales={this.state.profesionales}
                                        isLoadingSearch={this.state.isLoadingSearch}
                                        delete={this.deleteProfesional}
                                        upload={this.getProfesional}
                                    />
                                </div>
                            </div>
                        }
                    </div>
            </div>
        )
    }
}