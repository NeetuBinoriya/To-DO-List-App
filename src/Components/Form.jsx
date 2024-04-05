import React, { useEffect, useState } from 'react';


const Form = ({ addToDo, id, setId, data, setData, setReload }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // console.log(title);
    // console.log(description);
    useEffect(() => {
        const editedData = data.filter((d) => d.id == id)
        console.log("Edited data From useEffect", editedData);
        setTitle(editedData[0]?.title)
        setDescription(editedData[0]?.description)
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (id) {
            // update Code Here
            const obj = {
                title,
                description
            };
            setData((prevState) =>
            prevState.map((data) =>(data.id === id ? {...data, ...obj}: data))
            );
            setTitle("")
            setDescription("")
            setId("")
        }
        else {
            if (title == "" || description == "") {
                alert("Please fill the title and description Input Field");
            }
            else {
                addToDo(title, description);
                alert("Your Data Added Successfully..!")
                setTitle("")
                setDescription("")
            }
        }
        setReload(true)
    };
    return (
        <>
            <div className="container p-3 mt-5">
                <form className='row d-flex justify-content-center align-item-center p-3' onSubmit={onSubmitHandler}>
                    <div className="mb-3 col-md-5">

                        <input value={title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3 col-md-5">

                        <input value={description} type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3 col-md-2">
                        
                        {id?(<button className="btn btn-primary">Edit</button>) : (<button className="btn btn-primary">Add</button>)}
                        
                        </div>
                </form>
            </div>
        </>
    );
}

export default Form;
