import React, { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function DoctAvail({availability}) {

    console.log(availability);

    const [staticModal, setStaticModal] = useState(false);
    const toggleShow1 = () => setStaticModal(!staticModal);
  return (
    <div>
        {/* Availability modal */}
        <button className='btn btn-info me-2' onClick={toggleShow1}>Availability</button>
        <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle><h4>Availability</h4></MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow1}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                            <p>Monday : {availability?.Monday}</p>
                                            <p>Tuesday : {availability?.Tuesday}</p>
                                            <p>Wednesday : {availability?.Wednesday}</p>
                                            <p>Thursday : {availability?.Thursday}</p>
                                            <p>Friday : {availability?.Friday}</p>
                                            <p>Saturday : {availability?.Saturday}</p>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow1}>
                                                Close
                                            </MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
    </div>
  )
}

export default DoctAvail