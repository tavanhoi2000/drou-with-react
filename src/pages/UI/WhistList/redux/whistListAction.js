import { FavoriteItemCollection, db } from "../../../../config/firebase";
import { getDocs, deleteDoc, doc } from "firebase/firestore";
import { whistListSlice, callTypes } from "./whistListSlice";

const { actions } = whistListSlice;

export const getListFavoriteItem = () => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.list }));
  const data = await getDocs(FavoriteItemCollection);
  const favoriteItem = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dispatch(actions.favoriteItemFetched({ favoriteItem }));
};

export const removeFavoriteItemDoc = (param) => async (dispatch) => {
  dispatch(actions.startCall({ callTypes: callTypes.action }));
  const favoriteItemDoc = doc(db, "favoriteItem", param);
  deleteDoc(favoriteItemDoc);
};
