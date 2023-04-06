import { call, put, takeEvery } from "redux-saga/effects"
import { app } from "@/firebase/firebase";
import { getAuth,signInWithEmailAndPassword} from "@/firebase/auth";
import { getUsersSuccess } from "../feature/auth/authSlice";

const auth = getAuth(app);

function* workFetchUsers (action) {
    const {email,password} = action.payload;

    const userCredentials = yield call(() => signInWithEmailAndPassword(auth, email, password))
    const user = userCredentials.user
    yield put(getUsersSuccess(user))
}

function* signInWithEmailPassSaga (){
    yield("auth/getFetchUsers", workFetchUsers)
}
export default signInWithEmailPassSaga