
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection, updateDoc, serverTimestamp,query, orderBy, limit,getDocs  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0DMhX33DBFFq7olw0Ckstbjw1n447m4o",
    authDomain: "registo-recode.firebaseapp.com",
    projectId: "registo-recode",
    storageBucket: "registo-recode.appspot.com",
    messagingSenderId: "146187281103",
    appId: "1:146187281103:web:69d483563ec2f401e44dba",
    measurementId: "G-4VHR1J3FY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add data to firebase

async function pulsa() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("last-name").value;
  var documentValue = document.getElementById("document").value;
  var createdAt = serverTimestamp();


  // toJsDate: () => {
  //   const dob = get_costumer.data[0].dob;
  //   const ts =(dob.seconds + dob.nanos*10**-9)*1000;
  //   return new Date(ts);
  // }
  // serverTimestamp() = new Date(ts);


  // Validation //

  if (name.trim() === "" || lastName.trim() === "" || documentValue.trim() === "") {
      console.error("Todos los campos deben estar llenos");
      return;  
  }

  try {
      const docRef = await addDoc(collection(db, "usuarios"), {
          name: name,
          lastName: lastName,
          documentValue: documentValue,
          createdAt: createdAt
      });

      console.log("Document written with ID: ", docRef.id);
      name = document.getElementById("name").value = "";
      lastName = document.getElementById("last-name").value = "";
      documentValue = document.getElementById("document").value = "";
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

const btnPulsa = document.getElementById('btn-pulsa');
btnPulsa.addEventListener('click', pulsa);



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  console.log(serverTimestamp())






   




