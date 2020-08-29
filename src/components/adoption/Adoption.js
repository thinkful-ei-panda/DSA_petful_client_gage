import React from "react";
import PetDisplay from "../petDisplay/petDisplay";
import PeopleDisplay from "../../components/peopleDisplay/PeopleDisplay";

export default class Adoption extends React.Component {
  static defaultProps = {
    error: null,
    regInput: "",
    cat: {},
    dog: {},
    val : '',
    peopleInQueue: [],
    handleAdoption: () => {},
    handleRegistrationInput: () => {},
    handleRegistration: () => {},
  };

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
              <PetDisplay
                handleAdoption={this.props.handleAdoption}
                cat={this.props.cat}
                dog={this.props.dog}
                user={this.props.user}
                handleQueueMovement={this.handleQueueMovement}
                peopleInQueue={this.props.peopleInQueue}
              />
              {/* {this.props.error && <div>{this.props.error.error}</div>} */}
            </div>
          </div>
          <div className="content-column-right">
            <div className="content-item">
              <h3>Adoption Queue</h3>
              <p>
                The person at the top of the queue has 5 seconds to adopt either
                pet.
              </p>
              <div className="queue">
              <PeopleDisplay people={this.props.peopleInQueue} />
              {/* {this.props.error && <div>{this.props.error.error}</div>} */}
              </div>
            </div>
            <div className="content-item">
              <form
                onSubmit={ this.props.handleRegistration}
              >
                <h3>Join the Queue</h3>
                <p>Add your name to join the adoption queue.</p>
                <legend></legend>
                <fieldset>
                  <div>
                    <label htmlFor="name" className="hidden">
                      Name
                    </label>
                    <input
                      onChange={this.props.handleRegistrationInput}
                      name="name"
                      value={this.props.val}
                      id="name"
                      placeholder="name"
                      required
                    />
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
    );
  }
}