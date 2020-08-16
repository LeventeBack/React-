import React, { useState, useEffect }from 'react'
import './StartMenu.css'
import axios from 'axios';

function StartMenu({getQuizdata}) {
    const [categories, setCategories]  = useState([])
    const [difficulity, setDifficulity] = useState('easy')
    const [category, setCategory] = useState(9)

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then(res => {
            setCategories(res.data.trivia_categories)
        })
    }, [])

    function handleFormSubmit(e){
        e.preventDefault()
        getQuizdata(difficulity, category)
    }

    return (
        <div className="start-menu">
            <h1>QUIZ GAME</h1>
            <form onSubmit={handleFormSubmit}>
                <select onChange={e => setDifficulity(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select onChange={e => setCategory(e.target.value)}>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button type="submit">Start Game</button>
            </form>
        </div>
    )
}

export default StartMenu