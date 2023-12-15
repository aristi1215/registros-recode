
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,
        addDoc, collection, 
        updateDoc,deleteDoc,
        doc, serverTimestamp,
        query, where, orderBy,
        limit,getDocs,onSnapshot,
        getDoc} 


from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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



//Leer Datos

var tabla = document.getElementById('tabla');


const querySnapshot = await getDocs(collection(db, "usuarios"));
tabla.innerHTML = ""
  querySnapshot.forEach((doc) => {
    //las comillas invertidas (alt + 96) se usan para concatenar variables
    const createdAtTimestamp = doc.data().createdAt;
    const createdAtDate = createdAtTimestamp ? createdAtTimestamp.toDate() : null;

    console.log(`${doc.id} => ${doc.data().name}`);
    tabla.innerHTML += `
    <tr>                    
                            <td>${doc.id}</td>
                            <td>${doc.data().name}</td>
                            <td>${doc.data().lastName}</td>
                            <td>${doc.data().documentValue}</td> 
                            <td>${createdAtDate ? createdAtDate.toLocaleString() : 'N/A'}</td>
                            <td><button type="button" class="btn btn-danger"  onclick="deleteData('${doc.id}')" id="liveAlertBtn">Delete</button></td>
                        </tr>
    `
})


//delete Data 

window.deleteData = async function(id){
    try{
        await deleteDoc(doc(db,"usuarios",id))
    }catch(err){
        console.log(err)
    }
}


//Edit Data

window.updateData = async function(id){
    try{
        const docSnapshot = await getDoc(doc(db, "usuarios",id));
        const currentUser = docSnapshot.data();
    }catch(err){
        console.log(err)
    }
}



//bootstrap alert Delete

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Borrado Exitosamente!', 'danger')
  })
}

//ejemplo de conslutas

// const q = query(collection(db, "usuarios"), where("name", "==", "juan"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const names = [];
//   querySnapshot.forEach((doc) => {
//       names.push(doc.data().name);
//   });
//   console.log("Current names in CA: ", names.join(", "));
// })