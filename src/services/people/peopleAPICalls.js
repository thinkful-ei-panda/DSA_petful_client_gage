
const peopleApiCalls = {
    //get
    getListOfPeopleInQueue(){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/people`)
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
            body : JSON.stringify(person)
        })
    }
}


export default peopleApiCalls