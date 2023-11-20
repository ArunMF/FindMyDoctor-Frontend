import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f w-25' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter w-25' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google w-25' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram w-25' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin w-25' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-black m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github w-25' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-black p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-black' href='https://mdbootstrap.com/'>
          FindMyDoctor.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer