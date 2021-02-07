import React, { Component } from 'react';
import { Map } from 'immutable';
import Course from './course'

class Coursework extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: Map(),
            courseId: 0,

            newCourseName: '',
            courseDept: '',
            courseNum: '',
            courseProf: '',
        }
    }

    newCourseFunction = (event) => {
        this.setState({
            newCourseName: event.target.value
        })
    }
    courseDeptFunction = (event) => {
        this.setState({
            courseDept: event.target.value
        })
    }

    courseNumFunction = (event) => {
        this.setState({
            courseNum: event.target.value
        })
    }

    courseProfFunction = (event) => {
        this.setState({
            courseProf: event.target.value
        })
    }

    // save course info--still having issues w it not allowing >1 course posting  
    saveCourseInfo = () => {
        let courseData = {
            name: this.state.newCourseName,
            dept: this.state.courseDept,
            num: this.state.courseNum,
            prof: this.state.courseProf, 
        } 
        this.setState({ 
            courses: this.state.courses.set(this.setState.courseId, courseData), 
            courseId: this.state.courseId + 1
        })
    }

    delete = (id) => { 
        this.setState({courses:this.state.courses.delete(id)})
    }

    save =(id, field) => { 
        this.setState({courses:this.state.courses.update(id, (n) => { return Object.assign({}, n, field);})})
    }



    render() {
        const allCourses = this.state.courses.entrySeq().map(
            ([id, course]) => {
                return (
                    <Course
                        name={course.name}
                        dept={course.dept}
                        num={course.num}
                        prof={course.prof}
                        save={this.save}
                        delete={this.delete}
                        id={id}
                    />
                )
            }
        )

        // trying to make "previously recommended courses" conditional based upon courseId 
        // var prevSuggestions = (this.state.courseId > 0) ? 
        // <h2>previously recommended courses</h2>: <p></p>

        return (
            <div>
                <div className="form">
                <h2>Recommend a class!</h2>
                    <p>Suggested Coursename:</p>
                    <input type="text" value={this.state.newCourseName} onChange={this.newCourseFunction} ></input>

                    <p>Course Department:</p>
                    <input type="text" value={this.state.courseDept} onChange={this.courseDeptFunction} ></input>

                    <p>Course Number:</p>
                    <input type="text" value={this.state.courseNum} onChange={this.courseNumFunction} ></input>

                    <p>Course Professor:</p>
                    <input type="text" value={this.state.courseProf} onChange={this.courseProfFunction} ></input>
                    
                    <br/>
                    <button onClick={this.saveCourseInfo}>Save</button>
                </div>
                <h2>Previously Recommended Courses</h2>
                {allCourses}

            </div>

        )
    }
}

export default Coursework; 