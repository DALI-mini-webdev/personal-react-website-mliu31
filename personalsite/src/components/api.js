import '../App.css'; 
import axios from 'axios'; 
import { Component } from 'react'; 

class TriviaAPI extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            data: null
        }
    }
    //async func 
    fetchData = () => { 
        axios.get("http://jservice.io/api/random")
        .then((response) => { 
            console.log(response.data); 
            this.setState({data: response.data[0]})
        }).catch((error) => { 
            console.log(error)
        })
    }

    renderData = () => { 
        if(this.state.data) { 
            return( 
                <div> 
                    <em>Clue: </em> <br />
                    {this.state.data.question}
                    <br/> 
                    {/* <input type="text">Your Answer: </input> */}
                </div>
            )
        } else { 
            return null
        }
    }
    render() { 
        return ( 
            <div className="trivia"> 
                <h2>Jeopardy Time</h2>
                <button onClick = {this.fetchData}>Generate question</button>
                {this.renderData()}
            </div>
        ); 
    }

}

export default TriviaAPI