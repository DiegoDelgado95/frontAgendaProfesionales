import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../Spinner'

function Listado(props) {

    return (
        <div>
            {
                props.isLoading === true
                ?
                <Spinner />
                :
                props.profesionales.map(profesional => {
                    return (
                        <div className="shadow p-3 mb-5 bg-white rounded" key={profesional.idProfesional}>
                            <div className="d-flex">
                                <p><strong>{profesional.nombre}</strong></p>
                                <div className="ml-auto">
                                    <button className="btn btn-primary mr-2" 
                                        onClick={() => props.upload(profesional.idProfesional)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="btn btn-danger" 
                                        onClick={() => props.delete(profesional.idProfesional)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </div>
                            <p>Profesion: {profesional.profesion}</p>
                            <p>Matricula: {profesional.matricula}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listado;

