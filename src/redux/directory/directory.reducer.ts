import { AnyAction } from "redux";
import sections from "../../data/directory.data";
import { SectionType } from "../../types/common.types";

const INITIAL_STATE: Array<SectionType> = sections

const directoryReducer = (state = INITIAL_STATE, action: AnyAction)=>{
  switch(action.type) {
    default:
      return state
  }
}

export default directoryReducer