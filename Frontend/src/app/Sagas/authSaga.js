import { call, put, takeEvery } from "redux-saga/effects"
import { app } from "@/firebase/firebase";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { getUsersSuccess } from "../feature/auth/authSlice";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();


function* workFetchUsers(action) {
  const { email, password } = action.payload;

  const userCredentials = yield call(() => signInWithEmailAndPassword(auth, email, password));
  const user = yield userCredentials.user;
  const result = yield user;
  yield put(getUsersSuccess(result));
}

function* workFetchGoogleSignIn() {
  const userCredentials = yield call(() => signInWithPopup(auth, provider));
  const user = yield userCredentials.user;
  const result = yield user;
  yield put(getUsersSuccess(result));
}

function* workGetUserRegistered(action) {
  const { email, password, displayName } = action.payload
  try {
    const userCredentials = yield call(() => createUserWithEmailAndPassword(auth, email, password))
    const user = yield userCredentials.user;
    yield call(() => user, updateProfile(user, { displayName }))
    yield put(getUsersSuccess(user));
  } catch (e) {
    console.error(e.message);
  }
}

function* workSignOut() {
  const result = yield call(() => signOut(auth))
  yield put(getUsersSuccess(result));
}

function* signInWithEmailPassSaga() {
  yield takeEvery("auth/getFetchUsers", workFetchUsers);
  yield takeEvery("auth/getUserGoogleSignIn", workFetchGoogleSignIn);
  yield takeEvery("auth/getUserRegistered", workGetUserRegistered),
    yield takeEvery("auth/getUserSignOut", workSignOut)
}

export default signInWithEmailPassSaga;
