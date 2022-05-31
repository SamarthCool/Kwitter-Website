var firebaseConfig = {
      apiKey: "AIzaSyBIWV_nL53bRBs-aFexaNujoPugfxpHUhU",
      authDomain: "kwitter-9797c.firebaseapp.com",
      databaseURL: "https://kwitter-9797c-default-rtdb.firebaseio.com",
      projectId: "kwitter-9797c",
      storageBucket: "kwitter-9797c.appspot.com",
      messagingSenderId: "950281199670",
      appId: "1:950281199670:web:335eb8a6ab99f0f87cb897"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room_name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() { 
      firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey; 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
      document.getElementById("output").innerHTML += row; }); }); } getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


