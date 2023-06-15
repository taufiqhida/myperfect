import React from 'react'
import InputFile  from "elements/Form/InputFile";

import logoBca from "assets/images/logo-bca.jpg"
import logaMandiri from "assets/images/logo-mandiri.jpg"

export default function Payment(props) {
    const { data, ItemDetails, checkout } = props;

    const tax = 11;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;
  
  
    return (
      
        <div className='container' style={{ marginBottom: 30 }}>
          <div className='row justify-content-center align-items-center'>
              
                <div className='col-5 border-right py-5' style={{ paddingRight: 80 }}>
                  
                  <p className='mb-4'>Tranfer Pembayaran:</p>
                  <p>Tax: {tax}</p>
                  <p>Sub total: ${ subTotal} USD</p>
                  <p>Total: ${grandTotal} USD </p>
                  <div className='row mt-4'>
                      <div className='col-3 text-right'>
                          <img src={logoBca} alt="bank central asia" width="60" />   
                      </div>
                      <div className='col'>
                          <dl>
                              <dd>Bank Central Asia</dd>
                              <dd>2023 1999</dd>
                              <dd>Ridwan Fauzi</dd>
                          </dl>
                      </div>
                  </div>
                
                <div className='row'>
                    <div className='col-3 text-right'>
                        <img src={logaMandiri} alt="mandiri" width="60"/>
                    </div>
                    <div className='col'>
                        <dl>
                            <dd>Bank Mandiri</dd>
                            <dd>1993 2022</dd>
                            <dd>Hafidz</dd>
                        </dl>
                    </div>
                    </div>
                    
                </div>
                <div className='col-5 py-5' style={{ paddingLeft: 80 }}>
                    
                    <label htmlFor='proofPayment'>Upload Bukti Transfer</label>
                    <InputFile
                        accept="image/*"
                        id="proofPayment"
                        name="proofPayment"
                        value={data.proofPayment}
                        onChange={props.onChange}
                    />
  
                    <label htmlFor='bankName'>Asal Bank</label>
                    <InputFile
                        id="bankName"
                        name="bankName"
                        type="text"
                        value={data.bankName}
                        onChange={props.onChange}
                    />
                    
                    <label htmlFor='bankHolder'>Nama Pengirim</label>
                    <InputFile
                        id="bankHolder"
                        name="bankHolder"
                        type="text"
                        value={data.bankHolder}
                        onChange={props.onChange}
                    />
                    
                </div>
          </div>
    </div>
  )
}
