import React, { useState } from 'react'
import { MDBCollapse } from 'mdb-react-ui-kit';
import { Col } from 'react-bootstrap';

function DoctRevi({ reviews }) {

    console.log(reviews);

    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return (
        <div>
            {/* Review collapse */}
            <button className='btn btn-warning' onClick={toggleShow}>Reviews</button>

            <MDBCollapse className='my-4' show={showShow} style={{ marginLeft: '-125px' }}>
                <h4 className='mb-4'>Reviews</h4>
                {
                    reviews?.map((item) => (
                    <>
                        <Col className='my-5'>
                        <div className='d-flex'>
                            <img className='me-1' src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" height="20px" alt="" />
                        <h5 className='me-3'>{item.name}</h5>
                        <p>{item.rating} <i class="fa-solid fa-star text-warning"></i></p>
                        </div>
                        <p className='ms-2' style={{fontSize:'12px',marginTop:"-15px"}}>{item.date}</p>
                        <p style={{textAlign:"justify"}}>{item.comments}</p>
                        </Col>
                    </>
                    ))
                }
            </MDBCollapse>
        </div>
    )
}

export default DoctRevi