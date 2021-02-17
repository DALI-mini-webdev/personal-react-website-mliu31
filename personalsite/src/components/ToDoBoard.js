import React, { Component } from 'react'; 
import firebase from '../firestore/index'; 
import ToDoPosting from './ToDoPosting'; 
import '../App.css'


// firebase: https://console.firebase.google.com/u/0/project/dali-wisp/firestore/data~2Ftodo~2FPciLZ0FozY2E9gRVG0HA

class ToDoBoard extends Component { j
    constructor(props) { 
        super(props); 
        this.state = { 
            allToDos: [],
            title: '', 
            task:'',
            id:0,
        }
    }

newTitleFunction = (event) => { 
    this.setState({
        title: event.target.value
    })
}

newTaskFunction = (event) => { 
    this.setState({ 
        task:event.target.value, 
    })
}

saveNewToDo = () => { 
    firebase.db.collection('todo').add({ 
        title: this.state.title, 
        task:this.state.task,
        id:this.state.id
    }).then(ref => { 
        console.group('document reference id', ref.id); 
        this.setState({ 
            id:this.state.id + 1
        })
    }).catch((e) => { 
        console.log(e); 
    })
}

fetchToDos = () => { //firebase functions 
    const todoList = []; 
    firebase.db.collection('todo').get() // get everything from todo collection in the firebase db 
    .then(query => { 
        query.forEach(doc => { 
            console.log(doc.data()); 
            todoList.push(doc.data()); 
        })
    })
    .then(() => { // update state 
        this.setState({ 
        allToDos: todoList
        })
    }).catch((e) => { 
        console.log(e); 
    })
}

    render() { 
        const allPosts = this.state.allToDos.map((todo) => { 
            return (
                <ToDoPosting
                    title = {todo.title}
                    task = {todo.task}
                />
            )
        })

        return ( 
            <div> 
                <h2>this is our <em>to do</em> board</h2>
                <p>--add a new to do--</p>

                <p> enter title of to do: </p>
                <input type="text" value={this.state.title} onChange={this.newTitleFunction} /> 

                <p>enter task</p>
                <input type="text" value={this.state.task} onChange={this.newTaskFunction} /> 
                <br/>
                <button onClick={this.saveNewToDo}>save</button>

                <div class="allToDos"> 
                    <button onClick={this.fetchToDos}>show my todo's</button>
                    {allPosts}
                </div>

            </div>
        )
    }
}

export default ToDoBoard; 