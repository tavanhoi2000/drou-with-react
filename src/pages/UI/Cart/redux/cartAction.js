import { cartItemCollection, db } from "../../../../config/firebase";
import { getDocs,deleteDoc, doc } from "firebase/firestore";
import { cartSlice, callTypes } from "./cartSlice";

const { actions } = cartSlice;

export const getListCartItem = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.list }));
  const data = await getDocs(cartItemCollection);
  const cartItem = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dispatch(actions.cartItemFetched({ cartItem }));
};

export const removeCartItem = (param) => async (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.action}))
    const cartItemDoc = doc(db, 'cartItem', param)
    deleteDoc(cartItemDoc)
}

export const removeAllItem = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.action }));
  const data = await getDocs(cartItemCollection)
  if(data) {
    data.forEach((doc) => deleteDoc(doc.ref))
  }
};
