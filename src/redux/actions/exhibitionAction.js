import { EXHIBITION_LIST_FAIL, EXHIBITION_LIST_REQUEST, EXHIBITION_LIST_SUCCESS } from "../../constants"
import * as service from "../../services/exhibitionService";

export const getExhibitions = (mhxDomain) => async dispatch => {
  dispatch({ type: EXHIBITION_LIST_REQUEST});
  
  try{
    const { data } = await service.getExhibitions(mhxDomain);
    console.log(data);
    dispatch({ type: EXHIBITION_LIST_SUCCESS, exhibitions: data});

  } catch (e) {
    dispatch({ type: EXHIBITION_LIST_FAIL, error: e});
    console.error(e);
  }
}