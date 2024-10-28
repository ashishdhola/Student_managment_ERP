import { useDispatch, useSelector } from "react-redux"
import { DeleteDataAction } from "../Redux/Actions/StudentEction";
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShowStudents()
{

    let list=useSelector((state)=>(state.emp.employee))||[]
    let dispatch=useDispatch()

    let Deletedata=(pos)=>{
        dispatch(DeleteDataAction(pos))
        

    }
    
    
    
    return(
        <>
        <Table striped bordered hover className="text-center" style={{ margin: 'auto' }}>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((v, i) => (
          <tr key={i}>
            <td>{v.username}</td>
            <td>{v.phone}</td>
            <td>{v.email}</td>
            <td>{v.address}</td>
            <td>
              <Button variant="danger" onClick={() => Deletedata(i)} className="me-2">
                Delete
              </Button>
              <Link to={`/updateData/${i}`} className="btn btn-primary">
                Update
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

        </>
    )
}
export default ShowStudents