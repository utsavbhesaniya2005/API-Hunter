import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncAddCamels } from '../services/actions/camel.action';
import { useNavigate } from 'react-router';
import generateUniqueId from 'generate-unique-id';

const CamelRegistration = () => {

    const {isSuccess, errMsg} = useSelector(state => state.CamelReducers)

    const [formData, setFormData] = useState({
        id : generateUniqueId({
            useLetters : false,
            length : 4
        }),
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAsyncAddCamels(formData))

    };

    useEffect(() => {
        if(isSuccess){
            navigate('/');
        }
    }, [isSuccess])

    return(
        <>
            <Container>
                <h1 className="mt-3 my-5">Camel Registration Form</h1>

            {
                errMsg ? <h2 className='text-danger'>{errMsg}</h2>
                :
                <Form onSubmit={handleSubmit}>
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
            }
            </Container>
        </>
    )
}
export default CamelRegistration;