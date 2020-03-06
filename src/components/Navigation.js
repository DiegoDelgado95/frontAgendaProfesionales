import React from 'react'
import { Link } from 'react-router-dom'


export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Agenda Turnos</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profesionales">Profesionales</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;