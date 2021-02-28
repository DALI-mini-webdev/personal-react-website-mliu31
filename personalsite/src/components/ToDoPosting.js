import React, { Component } from 'react';
import firebase from '../firestore/index';
import '../App.css'

class ToDoPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {} // components don't need constructors unless defining state
    }

    // deletePost = () => { 
    //     firebase.db.collection('todo').where('id', '==', id).get() // specifies which id you want
    //     .then(querySnapshot => { 
    //         querySnapshot.docs[0].ref.delete(); 
    //     }).then(() => { 
    //         this.setState({ 
    //         //delete here; needs to rerender, needs redux 
    //         })
    //     })
    

    render() {
        return (
            <div className='todoPostStyle'>
                <p>{this.props.title}</p>
                <p>{this.props.task}</p>
                {/* <button onClick={this.deletePost}>delete</button> */}
            </div>
        )
    };
}

export default ToDoPosting; 
