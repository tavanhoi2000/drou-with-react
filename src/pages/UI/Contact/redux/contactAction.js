import { FeedbackCollection } from "../../../../config/firebase";
import { addDoc } from "firebase/firestore";
import { contactSlice, callTypes } from "./contactSlice";

const {actions} = contactSlice
export const sendFeedBack = (params) => async (dispatch) => {
  dispatch(actions.startCall({callTypes: callTypes.action}))
  await addDoc(FeedbackCollection, params);
};
