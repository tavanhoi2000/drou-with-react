import { getDocs } from "firebase/firestore";
import { callTypes, homeSlice } from "./homeSlice";
import { productCollection } from "../../../../config/firebase";
const { actions } = homeSlice;

export const getListProduct = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.list }));
  const data = await getDocs(productCollection);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dispatch(actions.productsFetched({ products }));
};
