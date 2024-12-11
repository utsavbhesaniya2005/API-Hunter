/* eslint-disable no-undef */
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAsyncCamels, getAsyncDelete } from '../services/actions/camel.action'
import { useEffect } from 'react';

const CamelHistory = () => {

    const {camels, isLoading, errMsg} = useSelector(state => state.CamelReducers);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(getAsyncDelete(id))
    }

    const handleView = (id) => {
        navigate(`/view/${id}`)
    }

    useEffect(() => {
        dispatch(getAsyncCamels())
    }, [])  

    return(
        <>
            {
                errMsg 
                ?   <h1>{errMsg}</h1> 
                :   
                    isLoading 
                    ?   
                    <h1>Loading...</h1>
                    :
                    <Table striped bordered hover className='mt-5' data-bs-theme="dark">
                        <thead>
                            <tr>
                                <th>Camel Id</th>
                                <th>Camel Name</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                camels.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.camelName}</td>
                                        <td>{data.age}</td>
                                        <td>{data.contact}</td>
                                        <td>
                                            <Button variant='primary' onClick={() => handleEdit(data.id)}>Edit</Button>
                                            || <Button variant='danger' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            || <Button variant='secondary' onClick={() => handleView(data.id)}>View</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
            }
        </>
    )
}
export default CamelHistory;