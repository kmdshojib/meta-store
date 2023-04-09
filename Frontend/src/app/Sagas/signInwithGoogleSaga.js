import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { app } from "@/firebase/firebase";
import { getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { getUserGoogleSignIn } from "../feature/auth/authSlice";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function* workFetchGoogleSignIn () {
    const userCredentials = yield call(() => signInWithPopup(auth, provider))
    const user = yield userCredentials.user
    const result = yield user
    yield put(getUserGoogleSignIn(result))
}

function* signInWithGoogleSaga (){
    yield takeLatest("auth/getUserGoogleSignIn", workFetchUsers)
}
export default signInWithGoogleSaga