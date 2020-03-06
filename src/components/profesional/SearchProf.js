import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchProf(props){

    return(
        <form onSubmit={(e) => props.onSubmitSearch(e)} className="mx-auto">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Buscar matricula"
                    onChange={(e) => props.onChangeSearch(e)}
                />
                <button className="input-group-prepend btn btn-primary" >
                    <div>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </button>
            </div>
        </form>
    )
}