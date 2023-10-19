import React from 'react'
import './Header.css'
import {
 
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
             <MDBNavbar light className='main fixed-top' >
      
          <MDBNavbarBrand href='#'>
            <img
            className='ms-2'
            src='https://cdn.dribbble.com/users/2613050/screenshots/7347945/discount_logo.gif'
              height='50'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
         <h4 className='me-auto heading'>Discount Calculator</h4>
      </MDBNavbar>
    </div>
  )
}

export default Header