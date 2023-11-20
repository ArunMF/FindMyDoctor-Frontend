import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { baseURL } from '../baseUrl';
import DoctAvail from './DoctAvail';
import DoctRevi from './DoctRevi';

function ViewDoct() {

    const {id} = useParams()
    console.log(id);

    const [doctor,setDoctor] = useState([])

    const fetchData = async()=>{
        const {data} = await axios.get(`${baseURL}/doctors/${id}`)
        // console.log(data);
        setDoctor(data)
    }
    console.log(doctor);

    useEffect(()=>{
        fetchData()
    },[])
    
    return (
        <div className='container py-5'>
            <Row className='mb-5'>
                <Col>
                    <img src={doctor.photo_url} width="100%" height="350px" alt="" />
                </Col>
                <Col>
                    <MDBListGroup style={{ minWidth: '22rem' }} light>
                        <MDBListGroupItem noBorders className='px-3'>
                            <h2>{doctor.name}</h2>
                            <p className='ms-2'>{doctor.specialization}</p>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className='px-3'>
                            <h4 className='ms-2'>{doctor.hospital}</h4>
                            <h6 className='ms-2'>{doctor.city}, {doctor.state}</h6>
                            <h6 className='ms-2'>Pincode: {doctor.pincode}</h6>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className='px-3 d-flex'>

                        <DoctAvail availability={doctor.available} /> <DoctRevi reviews={doctor.reviews}/>

                        </MDBListGroupItem>
                    </MDBListGroup>
                </Col>
            </Row>
            <Link className='d-flex justify-content-center' to={'/'}>
                <button className='btn btn-success'>Back to Home</button>
            </Link>
        </div>
    )
}

export default ViewDoct