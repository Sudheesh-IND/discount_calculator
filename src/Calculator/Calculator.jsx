import React, { useState } from 'react'
import './Calculator.css'
import { MDBInput} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Calculator() {

  const [amount,setAmount]=useState(0)
  const [rate,setRate]=useState(0)
  const [discounted,setDiscounted]=useState(0)
  const [saved,setSaved]=useState(0)


  console.log(amount,rate)
  const calculateDiscount=(e)=>{
    const output1=amount*(rate/100)
    const output2=amount-output1
    setDiscounted(output2)
    setSaved(output1)
  }

  const reset=(e)=>{
    setAmount(0)
    setDiscounted(0)
    setRate(0)
    setSaved(0)
  }
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-12  d-flex text-align-center justify-content-center ">
          <div className=" discount-portion">
            <div className='back'>
             <div className="row">
              <div className="col-md-12 enter-portion ">
                  <form action="" className='mt-2'>
                    <div>
                    <MDBInput onChange={(e)=>{setAmount(e.target.value)}} value={amount || ''} label='Original Price' id='form1' type='text' />
                    </div>
                    <div>
                    <MDBInput onChange={(e)=>{setRate(e.target.value)}} value={rate || ''} label='Discount Percentage' id='form1' type='text' />
                    </div>
                    <div className='text-center'>
                    <MDBBtn className='btn-danger' type='button' onClick={reset}>Reset</MDBBtn>
                    <MDBBtn className='btn-success ms-2' type='button' onClick={calculateDiscount}>Calculate</MDBBtn>
                    </div>
                  </form>
                  {/* <div className='img-portion'>
                    <img src="https://freepngimg.com/thumb/graphic_design/73080-discount-sale-label-free-hq-image.png" alt="" />
                  </div> */}
                    
                    
                        <div className='bottom' style={{textAlign:'center'}}>
                        <div className='discount'>
                        <p className='head'>Discounted Price: <span>{discounted}</span></p>
  
                        </div>
                        <div className='save'>
                          <p>You saved {saved} rupees 😁🌟</p>
                        </div>
                       </div>
                      
                    
              </div>
            
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator