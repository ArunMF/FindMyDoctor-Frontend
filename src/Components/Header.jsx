import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light' className='p-1 px-3'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn2.iconfinder.com/data/icons/medical-flat-icons-part-1/513/18-512.png'
              height='60'
              alt=''
              loading='lazy'
            />
            <h1 className='mt-3 ms-2'>FindMyDoctor</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header