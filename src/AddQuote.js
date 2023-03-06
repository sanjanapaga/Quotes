import React from 'react'
import QuotesForm from './QuotesForm'

const AddQuote=(props)=>{
    const{addItem}=props

    const formSubmision=(formData)=>{
        console.log('data',formData)
        addItem(formData)
    }
    return(
        <div>
            <QuotesForm formSubmision={formSubmision}/>
        </div>
    )
}
export default AddQuote