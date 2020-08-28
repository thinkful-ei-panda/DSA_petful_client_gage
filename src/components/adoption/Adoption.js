import React from 'react';

export default class Register extends React.Component {
    // state = {
    //   error:null
    // }
  
    // handleRegistrationSubmit = (ev) => {
    //   ev.preventDefault()
    //   this.setState({error:null})
    //   const {name} = ev.target
      
    //   fetch(`${config.API_ENDPOINT}/users`, {
    //     method: 'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name:name.value
    //     })
    //   })
    //   .then(res => (!res.ok)
    //   ? res.json().then(e => Promise.reject(e))
    //   : res.json())
    //   .then(() => {
  
    //     fetch(`${config.API_ENDPOINT}/auth/login`, {
    //       method: 'POST',
    //       headers: {
    //         'content-type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         email:email.value,
    //         password:password.value
    //       })
    //     })
    //     .then(res => (!res.ok)
    //     ? res.json().then(e => Promise.reject(e))
    //     : res.json())
    //     .then(res => {
    //       TokenService.saveAuthToken(res.authToken)
    //       email.value = ''
    //       password.value = ''
  
    //       this.props.handleLogIn(this.props.history)
    //     })
    //     .catch(error => {
    //       this.setState({error})
    //     })      
    //   })
    //   .catch(error => {
    //     this.setState({error})
    //   })
    // }
  
    render() {
    //   const {error} = this.state
  
      return (
        <div className="container">
            <div className="content-center">
          <form onSubmit={this.handleRegistrationSubmit}>
              <h2>Register to Adopt</h2>
              <p>lorem ipsum</p>
            <legend></legend>
            <fieldset>
                <div>
                  <label htmlFor="name" className="hidden">Name</label>
                  <input name="name" id="name" placeholder="name"/>
                </div>
                <div>
                  <button className="button">Register</button>
                </div>
            </fieldset>
          </form>
          {/* {error && <div>{error.error}</div>} */}
        </div>
        </div>
      )
    }  
  }
  