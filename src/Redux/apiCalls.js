import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { RigesterFailure, RigesterStart, RigesterSuccess } from "./rigesterRedux";
import { publicRequest } from "../requestMethods";
import { Redirect, Route } from "react-router";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return <Redirect to="/home" />;
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const Rigester = async (dispatch, user) => {
  dispatch(RigesterStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(RigesterSuccess(res.data));
  } catch (err) {
    dispatch(RigesterFailure());
  }
};