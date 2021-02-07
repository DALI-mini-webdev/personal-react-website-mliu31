import React, { Component } from 'react'

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            edit: false,
        }
    }

    editClassName = () => {
        this.setState({ edit: true })
        console.log("edit")
    }

    deleteRecommendedClass = () => { 
        this.props.delete(this.props.id) 
        console.log("delete")
    }

    submit = () => {
        console.log("submitted")
        var newName = {
            name: this.state.newName
        }
        this.props.save(this.props.id, newName);
        this.setState({suggesting: false})
    }

    changeNewCourse = (event) => {
        this.setState({ newName: event.target.value })
        console.log(event.target.value)
    }

    render() {
        var editCourseOrEditButton = null;

        if (this.state.edit) {
            editCourseOrEditButton = (
                <div>
                    <input value={this.state.updatedCourse} onChange={this.changeNewCourse} />
                    <button onClick={this.submit}>Submit Changes</button>
                </div>
            )
        }
        else {
            editCourseOrEditButton = <button onClick={this.editClassName}>Edit Coursename</button>
        }

        return ( 
            <div className="classcontainer"> 
                <p><em>{this.props.dept} {this.props.num}</em> : <b>{this.props.name}</b></p>
                <p>taught by {this.props.prof}</p>
                {editCourseOrEditButton}
                <br/>
                <button onClick={this.deleteRecommendedClass}>Delete</button>
            </div>
        )
    }
}

export default Course; 