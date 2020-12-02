import React from 'react'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UpdateItem from './component/UpdateItem';
import DeleteItem from './component/DeleteItem';

export default function FoodCards(props) {
    //console.log(props)
    return (
        <Card className="foodie">
          <CardContent>
            <div className="text_content">
              <h1>{props.foodName}</h1>
              <h2>{props.noOfTimes}</h2>
            </div>
            
            <ButtonGroup>
              <UpdateItem foodName={props.foodName} noOfTimes={props.noOfTimes} id={props.id}/>
              <DeleteItem id={props.id}/>
              
            </ButtonGroup>
  
          </CardContent>
        </Card>
    )
}
