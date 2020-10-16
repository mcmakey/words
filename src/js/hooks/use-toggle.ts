import * as React from "react";

const toggleReducer = (currentValue: boolean, nextValue?: any) =>
    typeof nextValue === "boolean" ? nextValue : !currentValue;

export const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] =>
    React.useReducer<React.Reducer<boolean, any>>(toggleReducer, initialValue);