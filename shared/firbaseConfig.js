// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.Firebase_API_KEY,
  authDomain: "practice-project-1-d7d96.firebaseapp.com",
  projectId: "practice-project-1-d7d96",
  storageBucket: "practice-project-1-d7d96.appspot.com",
  messagingSenderId: "1079010509611",
  appId: "1:1079010509611:web:6daa0dd28b21618b6ffb6e",
  measurementId: "G-JMYSVXWS8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/*USE INSIDE the COMPONENT
1.//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

2.
import { getFirestore } from "firebase/firestore";

3.
import app from "./../shared/firbaseConfig";

4. Set a document
To create or overwrite a single document, use the following language-specific set() methods:

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
const saveDoc=async()=>{await setDoc(doc(db, "collection_name",Document_id ), data_to_be_send)};

Note: Docuement_id should be unique and best option is Date.now().toString()


Upload from a Blob or File (for image and file upload )
Once you've created an appropriate reference, you then call the uploadBytes() method. uploadBytes() takes files via the JavaScript File and Blob APIs and uploads them to Cloud Storage.

import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'folder_name_where_you_want_to_save_file/' + file?.name);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});


// Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(storageRef).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }

*/

