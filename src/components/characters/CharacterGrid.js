import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        <div>
            isLoading ? <h1>Loading...</h1> : <section className="cards">
            {items.map(item => (
                <h1 key={item.char_id}>{item.name}</h1>
            ))}
            </section>
        </div> 
    )
}

export default CharacterGrid;