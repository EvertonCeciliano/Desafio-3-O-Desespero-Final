
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGS2gVXFDX0Ht113K5tfEl9eVK5AWZMPc",
  authDomain: "aws-react-desafio3.firebaseapp.com",
  projectId: "aws-react-desafio3",
  storageBucket: "aws-react-desafio3.appspot.com",
  messagingSenderId: "577900117477",
  appId: "1:577900117477:web:0d8539683c1d1c1567830c",
  measurementId: "G-7BD5JX6HSJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);