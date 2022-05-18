import React, {useState, useEffect, useRef} from 'react'

const TodoForm =(props)=>{

    //set the initial state to an empty string
    const [input, setInput] =useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    //a method to handle changes in the input field
    //the input value is set from the empty string to what is entered 
    const handleChange = (e)=>{
        setInput(e.target.value);
    };

    //a method to handle the button click i the form
    //when the button is clicked it prevents it from refreshing
    const handleSubmit = (e)=>{
        e.preventDefault();

        //sets a prop called ID to the new todo
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text:input
        });

        setInput('')
        
    };

    return(
        
        <form className='todo-form' onSubmit={handleSubmit}>
            
            { props.edit ? ( 
                <>
                  <input 
            name='todo'
             value={input} 
             placeholder="Add a todo"
             type='text'
             className='todo-input'
             onChange={handleChange}
             ref={inputRef}
             />
             <button className='todo-button'>Update</button>
                </>
          ) : (
             <>
             <input 
             name='todo'
              value={input} 
              placeholder="Add a todo"
              type='text'
              className='todo-input'
              onChange={handleChange}
              ref={inputRef}
              />
             <button className='todo-button'>Add todo</button>
            </>
              )}
            
        </form>
        
    );
}

export default TodoForm;