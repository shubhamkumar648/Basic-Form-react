import React, { Component } from 'react'

export class Form extends Component {

constructor(prop) {
    super(prop)

    this.state = {
        firstname: "",
        lastname: ''
    }

}

eventFnamehandler = (event) => {
    this.setState({firstname: event.target.value})
}

eventLnamehandler = (event) => {

    this.setState({lastname: event.target.value})
}

handleSubmit = (event) => {

    event.preventDefault()
console.log(this.state)
}

    render() {
        const {firstname,lastname} = this.state
        return (
            <div>
              <form onSubmit = {this.handleSubmit}>
                  <div>
                      <label>firstname</label>
                      <input type="text"
                             name="firstname"
                             value={firstname}
                             onChange= {this.eventFnamehandler}
                          />
                  </div>
                  <div>
                      <label>lastname</label>
                      <input type="text"
                             name="lastname"
                             value={lastname}
                             onChange= {this.eventLnamehandler}
                          />
                  </div>
                  <button type='submit'>Submit</button>
              </form>  
            </div>
        )
    }
}

export default Form
