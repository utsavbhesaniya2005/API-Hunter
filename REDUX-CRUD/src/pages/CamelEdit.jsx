import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findSingleCamel, updateCamel } from '../services/actions/camel.action';
import { useNavigate, useParams } from 'react-router';

const CamelEdit = () => {

    const camel = useSelector(state => state.CamelReducers.camel);

    const [formData, setFormData] = useState({
        id : '',
        camelName: '',
        ownerName: '',
        age: '',
        healthStatus: '',
        breed: '',
        color: '',
        contact: '',
        gender: '',
        additionalData: ''
    });
    
    const { id } = useParams();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCamel(formData))
        navigate('/');
        
    };

    useEffect(() => {
        dispatch(findSingleCamel(id))
    }, [])

    useEffect(() => {
        setFormData(camel)
    }, [camel])

    return(
        <>
            <Container>
                <h1 className="mt-3 my-5">Camel Edit Form</h1>

                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="id">
                        <Form.Control type="text" name="id" value={id} onChange={handleChange} hidden/>
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col md={6}>
                            <Form.Group controlId="camelName">
                                <Form.Label>Camel Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Camel Name" name="camelName" value={formData.camelName} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="ownerName">
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Owner Name" name="ownerName" value={formData.ownerName} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={4}>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter Camel Age" name="age" value={formData.age} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="healthStatus">
                                <Form.Label>Health Status</Form.Label>
                                <Form.Control type="text" placeholder="Enter Health Status"
                                    name="healthStatus"
                                    value={formData.healthStatus}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="breedType">
                                <Form.Label>Breed Type</Form.Label>
                                <Form.Control type="text" placeholder="Enter Breed Type" name="breed" value={formData.breed} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={4}>
                            <Form.Group controlId="color">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text" placeholder="Enter Camel Color" name="color" value={formData.color} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="contact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col md={12}>
                            <Form.Group controlId="additionalData">
                                <Form.Label>Additional Data</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Any Additional Information" name="additionalData" value={formData.additionalData} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default CamelEdit;