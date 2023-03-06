import React,{useState,useEffect} from 'react'
import AddQuote from './AddQuote'
import QuotesList from './QuotesList'

const QuotesContainer=(props)=>{
    const[quotes,setQuotes]=useState([])
    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('quotes'))||[]
        setQuotes(result)
    },[])
    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])
    
    const addItem=(quote)=>{
        const result=[quote,...quotes]
        setQuotes(result)
    }
    const removeItem=(id)=>{
        const result=quotes.filter((ele)=>{
            return ele.id!==id
        })
        setQuotes(result)
    }
    const editItem=(quote)=>{
        const result=quotes.map((q)=>{
            if(q.id===quote.id){
                return {...q,...quote}
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }
    return (
        <div>
            <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem}/>
            <AddQuote addItem={addItem} />
        </div>
    )
}
export default QuotesContainer