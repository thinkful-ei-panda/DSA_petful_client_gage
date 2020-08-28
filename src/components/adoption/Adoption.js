import React from 'react';

export default class Adoption extends React.Component {
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
          <div className="space-container">
          <h2>Adopt a Pet</h2>
          <hr></hr>
          </div>
          <div className="content">
            <div className="content-column-left">
            <div className="content-item">
                    <h3>Currently Up For Adoption</h3>
                    <p>lorem ipsum</p>
                {/* {error && <div>{error.error}</div>} */}
              </div>
            </div>
              <div className="content-column-right">
              <div className="content-item">
                    <h3>Adoption Queue</h3>
                    <p>The person at the top of the queue has 5 seconds to adopt the current pet.</p>
                {/* {error && <div>{error.error}</div>} */}
              </div>
                <div className="content-item">
                <form onSubmit={this.handleRegistrationSubmit}>
                    <h3>Register to Adopt</h3>
                    <p>Add your name to the adoption queue.</p>
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
            </div>
        </div>
      )
    }  
  }
  