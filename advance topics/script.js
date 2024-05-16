// const profilePhoto=document.querySelector('.card')
// const requestUrl = "https://api.github.com/users/Piyushrathoree"
//       const xhr = new XMLHttpRequest();//creating a xml/api request 
//       xhr.open("GET", requestUrl);//this method shows what you have to perform and from where //this initialize the http method but doesn't send anything
//       xhr.onreadystatechange = function () {//it is setting up an event listner that when this change to ready state it process the response data 
//         console.log(xhr.readyState);
//         if (xhr.readyState === 4) {//ready state has 5 stages in which the 5th index(4) is when it is completed 
//           const data = JSON.parse(this.responseText);//converting the data into object form because everything which is recieved from request is come in the form of string
//           console.log(typeof data);
//           console.log(data.followers);
//           console.log(data.location) ;
//           const avatarUrl = data.avatar_url; // assuming the avatar URL is in the 'avatar_url' property
//           const img = document.createElement('img');
//           img.src = avatarUrl;
//           profilePhoto.appendChild(img);


//         }
//       };
//       xhr.send();//most important -it actually print all the logs which has been used in the code 
//       //this code simply define how to access data from a basic api which is in form of object











// doing the same thing using fetch and it will run in node application as well

fetch('https://api.github.com/users/Piyushrathoree')
 .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
 .then((data) => {
    console.log(data.location);
    console.log(data.followers);
  })
 .catch((error) => {
    console.error('Error fetching data:', error);
  });