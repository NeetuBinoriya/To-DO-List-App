import React, { useState, useEffect } from 'react';
import Todos from './Components/Todos';
import Form from './Components/Form';

const App = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    if (reload) {
      const jsonData = JSON.stringify(data)
      localStorage.setItem("data", jsonData)
    }
    setReload(false)
  }, [data, reload]);

  useEffect(() => {
    const getLocalStorageData = JSON.parse(localStorage.getItem("data"));
    if (getLocalStorageData) {
      setData(getLocalStorageData);
    }
  }, [])


  // Add TO DO
  const addToDo = (title, description) => {
    const obj = {
      id: Math.random(),
      title,
      description,
    }
    setData([...data, obj])
    setReload(true)
  };
  // Delete ToDo
  const deleteTodo = (id) => {
    const filteredData = data.filter((d) => d.id != id)
    setData(filteredData)
    console.log(filteredData);
    setReload(true)
  };

  return (
    <>
      {/* <button className="btn btn-warning" onClick={()=>deleteTodo(1)}>Delete</button>*/}
      <Form addToDo={addToDo} data={data} setData={setData} id={id} setId={setId} setReload={setReload} />
      <Todos data={data} setData={setData} deleteTodo={deleteTodo} setId={setId} />
    </>
  );
}

export default App;
