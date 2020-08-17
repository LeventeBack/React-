import React, { useState, useRef } from 'react'
import QuizQuestion from './QuizQuestion'
import './QuizController.css'

function QuizController({quizData, setQuizData}) {
    const [quizIndex, setQuizIndex] = useState(0)
    const correcAnswers = useRef(0)
    
    function loadNextQuestion(){
        setQuizIndex(prevValue => prevValue + 1)
    }

    function incrementCorrectAnswers(){
        correcAnswers.current = correcAnswers.current  + 1;
    }

    function textCorrection(str){
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }

    if(quizIndex < 10){
        const question = textCorrection(quizData[quizIndex].question)
        const answer = textCorrection(quizData[quizIndex].correct_answer)
        const incorrects  = quizData[quizIndex].incorrect_answers.map(answ => textCorrection(answ))
        const options = [...incorrects, answer]

        return (
            <div className="quiz-container">
                <QuizQuestion 
                    quizIndex = {quizIndex}
                    question = {question} 
                    answer = {answer}
                    options = {options.sort(() => Math.random() -.5)}
                    loadNextQuestion={loadNextQuestion}
                    incrementCorrectAnswers={incrementCorrectAnswers}
                />                
            </div>
        )
    }
    else {
        return (
            <div className="results">
                <div className="text">YOUR SCORE</div>
                <div className="score">{correcAnswers.current}  / 10</div>
                <button className="restart" onClick={() => setQuizData(null)}>RESTART GAME</button>
            </div>
        )
    }
}

export default QuizController
