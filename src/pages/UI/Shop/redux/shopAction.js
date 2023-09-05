import { getDocs } from "firebase/firestore";
import {
  CategoryCollection,
  productCollection,
} from "../../../../config/firebase";
import { callTypes, shopSlice } from "./shopSlice";
const { actions } = shopSlice;

export const getListProduct = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.list }));
  const data = await getDocs(productCollection);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dispatch(actions.productsFetched({ products }));
};

export const getListCategory = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.list }));
  const data = await getDocs(CategoryCollection);
  const categories = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dispatch(actions.categoriesFetched({ categories }));
};
