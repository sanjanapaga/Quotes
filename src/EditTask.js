import React from 'react'
import QuotesForm from './QuotesForm'

const EditTask=(props)=>{
    const{id,name,body,editItem,handleToggle}=props

    const formSubmision=(formData)=>{
        editItem(formData)
    }
    return(
        <div>
            <QuotesForm id={id} name={name} body={body} 
            formSubmision={formSubmision} 
            handleToggle={handleToggle}
            />
        </div>
    )
}

export default EditTask