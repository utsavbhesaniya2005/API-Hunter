import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router';
import { findSingleCamel, updateCamel } from '../../services/actions/camel.action';
import { useDispatch, useSelector } from 'react-redux';

const View = () => {

    const {camel} = useSelector(state => state.CamelReducers);
    
    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findSingleCamel(id))
    }, [])

    return(
        <>
            <form action="">
                <input type="text" value={id} hidden />
            </form>
            <Card className='mx-auto mt-5' style={{ width: '30rem' }}>
                <Card.Img variant="top" src="../src/assets/camel-image.jpg" />
                <Card.Body>
                    <Card.Title><b>Camel Name :</b> {camel.camelName}</Card.Title>
                    <Card.Text>
                        Additonal Data : {camel.additionalData}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default View;