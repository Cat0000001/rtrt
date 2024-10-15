import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
// Your Firebase configuration ใหดของนศ.และ coppyมาใส apiKey: “keyของนศ.”,
apiKey: "AIzaSyDHVitcvKsEedW3xDl9ceO8OmooIB5afWw",
  authDomain: "app-nickname-13ade.firebaseapp.com",
  projectId: "app-nickname-13ade",
  storageBucket: "app-nickname-13ade.appspot.com",
  messagingSenderId: "631788431403",
  appId: "1:631788431403:web:112cda244b8775a8b8626e",
  measurementId: "G-SRXCNP9MKS"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };