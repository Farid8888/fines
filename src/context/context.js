import { createContext, useReducer, useState } from "react";

export const FinesContext = createContext({
  loading: false,
  error: false,
  enteredValue: "",
  setValueFn: (v) => {},
  loadingFn: () => {},
  errorFn: () => {},
  responseFn: () => {},
});

const initialState = {
  loading: false,
  error: false,
};
const reducer = (state, action) => {
  if (action.type === "SEND") {
    return { error: false, loading: true };
  }
  if (action.type === "RESPONSE") {
    return { ...state, loading: false };
  }
  if (action.type === "ERROR") {
    return { error: true, loading: false };
  }
  return state;
};

const FinesProvider = (props) => {
  const [value, setValue] = useState("");
  const [finesStatus, dispatch] = useReducer(reducer, initialState);
  const loadingHandler = () => {
    dispatch({ type: "SEND" });
  };

  const responseHandler = () => {
    dispatch({ type: "RESPONSE" });
  };
  const errorHandler = () => {
    dispatch({ type: "ERROR" });
  };
  const addValue = (value) => {
    setValue(value);
  };
  return (
    <FinesContext.Provider
      value={{
        loading: finesStatus.loading,
        error: finesStatus.error,
        enteredValue:value,
        loadingFn: loadingHandler,
        errorFn: errorHandler,
        responseFn: responseHandler,
        setValueFn: addValue,
      }}
    >
      {props.children}
    </FinesContext.Provider>
  );
};

export default FinesProvider;
