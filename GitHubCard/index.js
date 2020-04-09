/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/angel-guzman')
  .then( response => {
    console.log(response)
    
  })
  .catch( err => {
    console.log(err)
  })

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
  'nicholas-myers',
  'corbinrobb',
  'bobbygondola',
  'Kandelonius',
  'jonush'
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

function addTLs({imageURL, name, username, location, page, followers, following, bio}) {
  // Instantiate elements for cards
  const cardDiv = document.createElement('div')
  const imageElement = document.createElement('img')
  const infoDiv = document.createElement('div')
  const nameElement = document.createElement('h3')
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
  infoDiv.appendChild(nameElement)
  infoDiv.appendChild(usernameElement)
  infoDiv.appendChild(locationElement)
  infoDiv.appendChild(profileElement)
  profileElement.appendChild(anchorElement)
  infoDiv.appendChild(followersElement)
  infoDiv.appendChild(followingElement)
  infoDiv.appendChild(bioElement)

  // Add classes to elements
  cardDiv.classList.add('card')
  infoDiv.classList.add('card-info')
  nameElement.classList.add('name')
  usernameElement.classList.add('username')

  // Set text content and src with arguments
  imageElement.src = imageURL
  nameElement.textContent = `${name}`
  usernameElement.textContent = `${username}`
  locationElement.textContent = `Location: ${location}`
  anchorElement.href = `${page}`
  anchorElement.textContent = `${page}`
  followersElement.textContent = `Followers: ${followers}`
  followingElement.textContent = `Following: ${following}`
  bioElement.textContent = `${bio}`

  return cardDiv
}

// uncomment invokation when debugging
const userCard = cards.appendChild(addTLs({imageURL: 'https://avatars1.githubusercontent.com/u/60765703?v=4', name: 'Angel', username: 'Angel-Guzman', location: 'Orlando', page: 'https://github.com/Angel-Guzman', followers: '11', following: '14', bio: ''}))


// {imageURL: '#', name: 'Angel', username: 'Angel-Guzman', location: 'Orlando', page: 'https://github.com/Angel-Guzman', followers: '11', following: '8', bio: ''}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
