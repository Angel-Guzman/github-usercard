/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/')
//   .then( response => {
//     //
//   })
//   .catch( err => {

//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// grab parent element div.cards
const cards = document.querySelector('.cards')

function addTLs({object}) {
  // Instantiate elements for cards
  const cardDiv = document.createElement('div')
  const imageElement = document.createElement('img')
  const infoDiv = document.createElement('div')
  const h3Element = document.createElement('h3')
  const usernameElement = document.createElement('p')
  const locationElement = document.createElement('p')
  const profileElement = document.createElement('p')
  const anchorElement = document.createElement('a')
  const followersElement = document.createElement('p')
  const followingElement = document.createElement('p')
  const bioElement = document.createElement('p')

  // Setup up structure of elements
  cardDiv.appendChild(imageElement)
  cardDiv.appendChild(infoDiv)
  infoDiv.appendChild(h3Element)
  infoDiv.appendChild(usernameElement)
  infoDiv.appendChild(locationElement)
  infoDiv.appendChild(profileElement)
  infoDiv.appendChild(anchorElement)
  infoDiv.appendChild(followersElement)
  infoDiv.appendChild(followingElement)
  infoDiv.appendChild(bioElement)


  // Add classes to elements
  cardDiv.classList.add('card')
  infoDiv.classList.add('card-info')
  h3Element.classList.add('name')
  usernameElement.classList.add('username')

  
  // Set text content
  
  
  return null
}

// uncomment invokation when debugging
// addTLs({})  

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
