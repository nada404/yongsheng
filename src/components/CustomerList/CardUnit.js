import React from 'react'
import {Card,Button} from 'react-bootstrap'
import AfricanGuy from '../../assets/customerImg/AfricanGuy.PNG'
import AmericanGuy from '../../assets/customerImg/AmericanGuy.PNG'
import JapaneseGuy from '../../assets/customerImg/JapaneseGuy.PNG'

const customImgMap = new Map([
    ['非洲老铁',AfricanGuy],
    ['美国老兵',AmericanGuy],
    ['日本老哥',JapaneseGuy],
])

export function CardUnit(props) {
    return (
        <Card className='bg-light' style={{flex:'1'}}>
            <Card.Img 
                variant="top" 
                src={customImgMap.get(props.customerName)} 
                style={{objectFit:'scale-down'}}
            />
            <Card.Body 
                style={{
                    display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'space-between'
                }}
            >
                <Card.Title>{props.customerName}</Card.Title>
                    <Card.Text>
                        {props.customerDesc}
                    </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
  }

export default CardUnit;