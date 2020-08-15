import React, { useState, useEffect }from 'react'
import './StartMenu.css'
import axios from 'axios';

function StartMenu() {
    const [categories, setCategories]  = useState([])

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php',{
            params: {
                amount: 10,
                category: 21,
                difficulty: 'easy',
                type: 'multiple'
            }
        }).then(res => {
            setCategories(res.data.trivia_categories)
        })

    }, [])

    return (
        <div className="start-menu">
            <h1>QUIZ GAME</h1>
            <form onSubmit={e => e.preventDefault()}>
                <select>
                    <option selected disabled>Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select>
                    <option selected disabled>Select category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button>Start Game</button>
            </form>
        </div>
    )
}

export default StartMenu