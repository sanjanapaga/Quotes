import React,{useState} from "react";
import EditTask from "./EditTask";

const QuotesItem=(props)=>{
    const{id,name,body,removeItem,editItem}=props
    const[toggle,setToggle]=useState(false)

    const handleRemove=(id)=>{
        const result=window.confirm('Are you sure?')
        if(result){
            removeItem(id)
        }
    }
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return(
        <div>
           {toggle?(
            <div>
            <EditTask id={id} name={name} body={body} editItem={editItem} 
            handleToggle={handleToggle} />
             <button onClick={handleToggle}>cancel</button>
            </div>
           ):(
            <div>
                <blockquote>{body}-<b>{name}</b></blockquote>
                <button onClick={()=>{handleRemove(id)}}>Remove</button>
                <button onClick={handleToggle}>Edit</button>
            </div>
           )}
        </div>
    )
}

export default QuotesItem