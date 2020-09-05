import React, {useState,useEffect} from 'react'
import {Container, Jumbotron, Button, Card} from 'react-bootstrap'
import customerList from '../../assets/customerList'
import CardUnit from './CardUnit'

function CustomerList(){

    const [customer, setCustomer] = useState([]);

    const customerList = [
        {
            id: 1,
            customerName: '日本老哥',
            customerDesc: 'Japanese resourses is limited, we must have jinkela!'
        },    
        {
            id: 2,
            customerName: '非洲老铁',
            customerDesc: 'African agriculture is not advanced, we must have jinkela!'
        },
        {
            id: 3,
            customerName: '美国老兵',
            customerDesc: 'A bag of fertilizer mixed with jinkela fights as two bags!'
        }
    ]

    const customerCards = customerList.map(item => 
            <CardUnit 
                customerName={item.customerName} 
                customerDesc={item.customerDesc}
                className="cardItem" 
                key={item.id}
                style={{display:'flex', alignItems:'stretch'}}
            />
    )

    return(
        <Container>
            <Jumbotron className="text-center mt-5">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <Container className="cardContainer">
                {customerCards}
            </Container>
        </Container>
    )
}

export default CustomerList;
