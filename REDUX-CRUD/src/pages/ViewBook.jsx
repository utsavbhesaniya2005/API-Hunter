import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findBooksAsync } from '../services/actions/book.action';

const View = () => {

    const {book} = useSelector(state => state.BookReducers);
    
    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            dispatch(findBooksAsync(id))
        }
    }, [id])

    if(!book){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <form action="">
                <input type="text" value={id} hidden />
            </form>
            <Card className='mx-auto mt-5' style={{ width: '30rem' }}>
                <Card.Img variant="top" src="../src/assets/camel-image.jpg" />
                <Card.Body>
                    <Card.Title><b>Book Name :</b> {book.bTitle}</Card.Title>
                    <Card.Text>
                        Book Info : {book.binfo}
                    </Card.Text>
                    <Link className='btn bg-success' to='/'>Back To Book History</Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default View;