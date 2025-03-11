import React from 'react'

function Balance({balance}) {
  return (
    <>
      <h2 className='text-center font-bold font-6xl'>Your Balance</h2>
      <h3 className='text-center font-bold font-3xl'>{balance}</h3>
    </>
  )
}

export default Balance;
