
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
    var name2 = "hola"


    try {
        const docRef = await addDoc(collection(db, "usuario"), {
            name: name,
            lastName: lastName,
            documentValue: documentValue
        });

        console.log("Document written with ID: ", docRef.id);
        // name = document.getElementById("name").value = "";
        // lastName = document.getElementById("last-name").value = "";
        // documentValue = document.getElementById("document").value = "";

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const btnPulsa = document.getElementById('btn-pulsa');
btnPulsa.addEventListener('click', pulsa);




(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



   




