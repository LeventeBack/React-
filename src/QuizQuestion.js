import React from 'react'
import './QuizQuestion.css'

function QuizQuestion({quizIndex, question, answer, options, loadNextQuestion, incrementCorrectAnswers}) {
    function checkCorrectAnswer(answ){
        if(answ === answer){
            incrementCorrectAnswers()
        }
        loadNextQuestion()
    }

    return (
        <>
            <div className="question">{quizIndex+1}. {question}</div>
            {options.map(option => 
                <div 
                    className="option" 
                    id={option} 
                    key={option}
                    onClick={e  => checkCorrectAnswer(e.target.id)}
                >{option}</div>     
            )}
        </>
    )
}

export default QuizQuestion
