import React,{useState} from 'react';
import './App.css';
import SingleQuestion from './components/Questions';
import data from './components/Data'
function App() {
  const[questions,setQuestions]=useState(data);
  return (
    <div className='container'>
      <h3>questions and answer through toggle button </h3>
      <section className="info">
        {
          questions.map((question)=>{
            return(
              <SingleQuestion key={question.id} {...question}/>
            )

          })
        }
      </section>
    </div>
  );
}

export default App;
