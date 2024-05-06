import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootSelector } from "../store";

const useSelectorHook: TypedUseSelectorHook<RootSelector> = useSelector
 
export default useSelectorHook;