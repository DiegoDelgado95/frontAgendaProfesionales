import React from 'react'
import HoraDisponible from './home/HoraDisponible'
import ProfesionalTurno from './home/ProfesionalTurno'

export const Home = () => (
    <div>
        <h2 className="bg-dark text-center text-white p-3">Home</h2>
        <HoraDisponible />
        <ProfesionalTurno />
    </div>
)
