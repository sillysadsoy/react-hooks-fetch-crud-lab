import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ data, setPage }) {
  const questions = data.map(question => {
    return <QuestionItem question={question} 
                         key={question.id} 
                         handleDelete={handleDelete}
                         handleChange={handleChange} />
  });

  function handleDelete(e) {
    console.log(e.target.id)
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: 'DELETE'
    })
    setPage('list')
  };

  function handleChange(e) {
    console.log(e.target.id)
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({'correctIndex': e.target.value})
    })
    setPage('LIst')
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
