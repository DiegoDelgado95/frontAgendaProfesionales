import React from 'react'

export default function Spinner(){
    return (
        <div className="m-auto">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}