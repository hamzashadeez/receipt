import { atom } from "recoil";

export const id = atom({
    key: 'id', // unique ID (with respect to other atoms/selectors)
    default:null, // default value (aka initial value)
  });