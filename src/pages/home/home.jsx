import React, { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import userOperations from "../../redux/operations/userOperations";

export default function Home() {

  const dispatch = useDispatch()
  const token = useSelector((state)=>state.auth.token);
  useEffect(()=>{
    dispatch(userOperations.current(token))    
  })

  return <h1>HOME</h1>;
}
