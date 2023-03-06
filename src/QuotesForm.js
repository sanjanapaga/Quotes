import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuotesForm=(props)=>{
    const{formSubmision,id:slNo,name:author,body:quote,handleToggle}=props
    const[id,setId]=useState(slNo?slNo:uuidv4)
    const[name,setName]=useState(author?author:'')
    const[body,setBody]=useState(quote?quote:'')

    const handleNameChange=(e)=>{
        const result=e.target.value
        setName(result)
        //console.log(e.target.value)
    }
    const handleBodyChange=(e)=>{
        const result=e.target.value
        setBody(result)
        //console.log(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            body:body
        }
        console.log(formData)
        formSubmision(formData)
        if(handleToggle){
            handleToggle()
        }
        setName('')
        setBody('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" value={name} onChange={handleNameChange} /><br/>
                <label>Body</label><br/>
                <textarea value={body} onChange={handleBodyChange}></textarea><br/>
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}
export default QuotesForm