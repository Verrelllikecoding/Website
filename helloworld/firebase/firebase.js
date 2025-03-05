import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  /*
    API keys
  */
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
