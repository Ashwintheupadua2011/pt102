
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBMGWiuEsIhhgTSVEcXwNnRXORu9WmEdJw",
  authDomain: "adv-101.firebaseapp.com",
  projectId: "adv-101",
  storageBucket: "adv-101.appspot.com",
  messagingSenderId: "335101835934",
  appId: "1:335101835934:web:794cbe2a56f32d500e998f",
  measurementId: "G-9KV2EEVS49"
};


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name -" + Room_names);
         row="div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id) '>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      });});};

function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose :"adding roomname"  
      });
      localStorage.setItem("room_name" , room_name);
      window.location ="kwitter_page.html"

}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html"
}
