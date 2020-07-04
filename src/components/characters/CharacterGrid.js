import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        <div>
            isLoading ? <h1>Loading...</h1> : <section className="cards">
        </div>
    )
}

export default CharacterGrid;