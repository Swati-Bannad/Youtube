import { useEffect } from "react";
import Livemessage from "./Livemessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/data";
import { generateMsg } from "../utils/data";

const Livechat =() => {
    //API polling
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        setInterval(()=>{
            dispatch(addMessage({name:generateName(), msg:generateMsg()}));
        },5000)
    },[])

    return (
        <div className="rounded ml-3 p-3 border border-gray-300 bg-slate-100 w-full h-[400px] overflow-y-scroll livechat-wrap flex flex-col-reverse" >
            {chatMessages.map((c, index)=>(
                <Livemessage key={index}name={c.name} msg={c.msg}/>
            ))}
            
        </div>
    )
}
export default Livechat;