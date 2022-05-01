import { getAuth, sendEmailVerification } from "firebase/auth";
const auth = getAuth();
const ValidateUser = async (user: string) => {
  sendEmailVerification()
};
