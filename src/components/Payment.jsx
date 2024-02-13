import React, { useEffect, useState } from 'react'

function Payment() {

    const initialPayment = {
        evc : false,
        zaad: false,
        sahal: false,
    };
    const [paymentMethod,setPaymentMethod]= useState(initialPayment);
    const [updated, setUpdated]= useState(false);

    useEffect(() =>{
        
    }, [updated]);

  return (
    <div>
      <h2>pay with</h2>
      <div className="payment-cards">
      <div className={`payment-card ${paymentMethod.zaad && "selectesd"}`} 
          onClick={()=>setPaymentMethod({...initialPayment, zaad: true})}>
            <h3>Zaad Service</h3>
        </div>

        <div className={`payment-card ${paymentMethod.evc && "selectesd"}`} 
          onClick={()=>setPaymentMethod({...initialPayment, evc: true})}>
            <h3>Evc Plus</h3>
        </div>
        
        <div className={`payment-card ${paymentMethod.sahal && "selectesd"}`} 
          onClick={()=>setPaymentMethod({...initialPayment, sahal: true})}>
            <h3>Sahal Service</h3>
        </div>
        
      <form>
        <input type="text" className='form-control' placeholder='252...' />
        <button className='btn-proceed'>proceed</button>
      </form>
      </div>
    </div>
  )
}

export default Payment
