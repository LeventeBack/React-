import React, {useState} from 'react';
import axios from 'axios';
import StartMenu from './StartMenu';
import QuizController from './QuizController'
import './App.css'

function App() {
  const [quizData, setQuizData] = useState()


  function getQuizdata(difficulity, category){  
      const params = {
          amount: 10,
          type: 'multiple'
      }
      params.difficulty = difficulity
      params.category = category   

      axios.get('https://opentdb.com/api.php',{
        params: params
      })
      .then(res => {
        setQuizData(res.data.results)
      })
  }

  //console.log(quizData)
  return (
    <div className="container">        
          {!quizData && <StartMenu getQuizdata={getQuizdata} />}
          {quizData && <QuizController quizData={quizData} />}
    </div>
  );
}

export default App;
