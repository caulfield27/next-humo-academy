import { useDispatch } from "react-redux";
import { RootDispatch } from "../store";

const useDispatchHook = () => {
    return useDispatch<RootDispatch>()
}
 

export default useDispatchHook ;