import React, { useState } from 'react'

function AddTransaction({addTransaction}) {
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
    const hendleChange = (e)=>{
        e.preventDefault()
        
        if(text === "" || amount === 0)return;

        addTransaction({text , amount: +amount})
        setText("")
        setAmount(0)
    }
  return (
    <>
      <section>
      <form onSubmit={hendleChange}  >
        <div className=' flex flex-col justify-center items-center mt-7' >
        <input type="text" onChange={(e)=> setText(e.target.value)} className='p-2 m-2 border border-indigo-500' placeholder='please add details'name='details' value={text}/>
        <input type="number" onChange={(e)=> setAmount(e.target.value)} className='p-2 m-2 border border-indigo-500' placeholder='enter your amount' name='amount'value={amount} />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Add Amount</button>
        </div>
      </form>
      </section>
    </>
  )
}

export default AddTransaction
