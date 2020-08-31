
const peopleApiCalls = {
    //get
    getListOfPeopleInQueue(){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/people`)
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
    },

    //post
    /**
     * 
     * @param {{person : [NAME]}} person 
     */
    postNewUserIntoQueue(person){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/people`, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify({person:person})
        })
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
    },
    dequeueUserFromQueue(){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/people`, {
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json',
            }
        })
        .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
    }
}


export default peopleApiCalls