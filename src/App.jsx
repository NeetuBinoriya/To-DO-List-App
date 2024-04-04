import React, { useState, useEffect } from 'react';
import Todos from './Components/Todos';
import Form from './Components/Form';

const App = () => {
  const [data, setData] = useState([{
  }
  ]);
  useEffect(() => {
    if (data.length != 0) {
      const jsonData = JSON.stringify(data)
      localStorage.setItem("data", jsonData)
    }
    const getLocalStorageData = JSON.parse(localStorage.getItem("data"));
    if (getLocalStorageData) {
      setData(getLocalStorageData);
    }
  }, [data]);

  const [id, setId] = useState("")
  // Add TO DO
  const addToDo = (title, description) => {
    const obj = {
      id: Math.floor(Math.random() + 1),
      title,
      description,
    }
    setData([...data, obj])
  };
  // Delete ToDo
  const deleteTodo = (id) => {
    const filteredData = data.filter((d) => d.id != id)
    setData(filteredData)
    console.log(filteredData);
  };

  return (
    <>
      {/* <button className="btn btn-warning" onClick={()=>deleteTodo(1)}>Delete</button>*/}
      <Form addToDo={addToDo} data={data} setData={setData} id={id} setId={setId} />
      <Todos data={data} setData={setData} deleteTodo={deleteTodo} setId={setId} />
    </>
  );
}

export default App;
