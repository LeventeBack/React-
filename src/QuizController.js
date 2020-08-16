import React, { useState, useEffect } from 'react'
import QuizQuestion from './QuizQuestion'
import './QuizController.css'

function QuizController({quizData}) {
    const [quizIndex, setQuizIndex] = useState(0)
    const [correcAnswers, setCorrectAnswers] = useState(0)

    function loadNextQuestion(){
        setQuizIndex(prevValue => prevValue + 1)
    }

    function incrementCorrectAnswers(){
        setCorrectAnswers(prevValue => prevValue + 1)
    }

    function textCorrection(str){
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }

    const question = textCorrection(quizData[quizIndex].question)
    const answer = textCorrection(quizData[quizIndex].correct_answer)
    const incorrects  = quizData[quizIndex].incorrect_answers.map(answ => textCorrection(answ))
    const options = [...incorrects, answer]

    return (
        <div className="quiz-container">
            {quizIndex < 10 && <QuizQuestion 
                quizIndex = {quizIndex}
                question = {question} 
                answer = {answer}
                options = {options.sort(() => Math.random() -.5)}
                loadNextQuestion={loadNextQuestion}
                incrementCorrectAnswers={incrementCorrectAnswers}
            />}
            {quizIndex >= 10 && correcAnswers}
        </div>
    )
}

export default QuizController
