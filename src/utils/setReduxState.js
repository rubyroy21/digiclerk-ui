import store from "../redux/store/store";
import { actions as stateActions } from "../redux/slices/stateSlice";
import { actions as dataActions } from "../redux/slices/dataSlice";

const { dispatch } = store;

const setReduxState = (action, type, payload) => {
  // eslint-disable-next-line default-case
  switch (action) {
    case "state":
      dispatch(stateActions[type](payload));
      break;
    case "data":
      dispatch(dataActions[type](payload));
      break;
  }
};

export { setReduxState };
