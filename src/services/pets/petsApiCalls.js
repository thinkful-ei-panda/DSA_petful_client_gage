
const petsApiCalls = {
    /**
     * @returns {
     *      cat:
     *          {
     *       age: 3,
             breed: 'Tabby',
             description: 'boxer dog',
             gender: 'Male',
             imageURL: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
             name: 'Vince the Pince',
             story: 'Found in neighborhood
     *          },
     *      dog: 
     *          {
            age: 3,
            breed: 'Boxer',
            description: 'boxer dog',
            gender: 'Male',
            imageURL: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Tim',
            story: 'Found in neighborhood'
     *          
     *          }
     *          }
     */
    getNextPets(){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/pets`)
            .then(res =>  (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },
    /**
     * 
     * @param {{ type :'cats_or_dogs'}} petType 
     */
    removePetFromQueue(petType){
        return fetch(`${process.env.REACT_APP_API_ADDRESS}/pets`,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json', 
            },
            body : JSON.stringify(petType)
        })
    },
} 

export default petsApiCalls;