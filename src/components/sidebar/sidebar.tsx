"use client"
import QuestSidebar from "./guestSidebar/questSidebar";
import LogedSidebar from "./userSidebar/userSidebar";
import { useEffect, useState } from "react";
import { checkIsAuth } from "@/src/store/features/auth/auth";
import useDispatchHook from "@/src/hooks/dispatchHook";
import { useSelector } from "react-redux";
import useSelectorHook from "@/src/hooks/selectorHook";


const Sidebar = () => {
    const dispatch = useDispatchHook()
    const isAuth = useSelectorHook((state)=> state.auth.isAuth)

    useEffect(()=>{
        dispatch(checkIsAuth(Boolean(localStorage.getItem('loggedInUser'))))
    },[isAuth])


    return ( 
        isAuth ? <LogedSidebar/> : <QuestSidebar/>
    );
}
 
export default Sidebar;