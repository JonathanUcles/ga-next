import React from 'react';
import { useGoogleEvent } from '../../hooks'
import { GAEvent } from '../../lib/types'
type Props = {
    text:string;
    event : GAEvent
}
const EventButton = ({text,event}:Props) =>{
    return(
        <button onClick={()=>useGoogleEvent(event)}>{text}</button>
    )
}
export default EventButton