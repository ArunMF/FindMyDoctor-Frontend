import React, { useEffect, useState } from 'react'
import DoctCard from './DoctCard'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { baseURL } from '../baseUrl'

function AllDoct() {

  const [allDoctors,setAllDoctors] = useState([])

  const fetchData = async()=>{
    const {data} = await axios.get(`${baseURL}/doctors`)
    // console.log(data);
    setAllDoctors(data)
  }

  console.log(allDoctors);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='p-5'>
        <Row>
          {allDoctors.map((item)=>(
            <Col className='my-4'>
              <DoctCard doctors={item}/>
          </Col>
          ))}
        </Row>
    </div>
  )
}

export default AllDoct