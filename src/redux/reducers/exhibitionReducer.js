import { EXHIBITION_LIST_FAIL, EXHIBITION_LIST_REQUEST, EXHIBITION_LIST_SUCCESS } from "../../constants";

const initialState = { loading: false, exhibitions: null, selected: null, error: null };

const exhibitionReducer = (state = initialState, actions) => {
  switch (actions.type) {
    
    case EXHIBITION_LIST_REQUEST:
      return {
        ...initialState,
        loading: true
      };

    case EXHIBITION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        exhibitions: actions.exhibitions
      };
    case EXHIBITION_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: actions.error
      };

    default:
      return state;
  }
}

export default exhibitionReducer;