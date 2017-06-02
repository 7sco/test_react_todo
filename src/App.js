import React, { Component } from 'react';

import './App.css';

class App extends Component {

constructor(props){
  super(props);
    this.state= {
      text: "",
      todos:[]
    };
}

newTodo(text){
  const newArray= this.state.todos.filter(() => {return true});
  newArray.push({text: text});
  return( 
    {todos: newArray, text:""}
    
    )
}

handleType(event){
  
  
  this.setState({text: event.target.value})
  
}

click(event){
  this.setState(this.newTodo(this.state.text));
  
}

  render() {

    console.log(this.state);

    return (
      <div className="App">
        <input type="text" placeholder="Enter Text" onChange={this.handleType.bind(this)} value={this.state.text}/>
        <button onClick={this.click.bind(this)}>GO!!</button>

        <div>
          <ul>
            
            {this.state.todos.map((element, index)=> {
              return <li key={index} > {element.text} </li>
            })}

          </ul>

        </div>

      </div>
    );
  }
}

export default App;
