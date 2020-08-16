import React, { useState, useEffect, useRef }from 'react'
import './StartMenu.css'
import axios from 'axios';

function StartMenu() {
    const [categories, setCategories]  = useState([])
    const difficulityRef = useRef()
    const categoryRef = useRef()

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

    function handleFormSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="start-menu">
            <h1>QUIZ GAME</h1>
            <form onSubmit={handleFormSubmit}>
                <select ref={difficulityRef}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select ref={categoryRef}>
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