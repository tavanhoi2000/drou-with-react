import { addDoc, getDocs } from "firebase/firestore";
import { productCollection,FavoriteItemCollection, cartItemCollection } from "../../../../config/firebase";
import { callTypes, detailSlice } from "./detailSlice";
const { actions } = detailSlice;

export const addToCartDoc = (param) => async (dispatch) => {
    dispatch(actions.startCall({callTypes:callTypes.list}))
    await addDoc(cartItemCollection, param)
}

export const addToWhistListDoc = (param) => async (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    await addDoc(FavoriteItemCollection, param)
}

export const getListProduct = () => async (dispatch) => {
    dispatch(actions.startCall({ callTypes: callTypes.list }));
    const data = await getDocs(productCollection);
    const products = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(actions.productsFetched({ products }));
  };
