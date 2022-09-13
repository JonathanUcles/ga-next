import React from "react";
import { useOutBoundLink } from '../../hooks'
import {OutBoundEvent} from '../../hooks/types'
type Props = {
    link:string;
    text:string;
    target?:string;
    event: OutBoundEvent
}
const OutboundLink = ({link, text, event, target}:Props) =>{


    return(
        <a onClick={()=>useOutBoundLink(link,event, target)} >
            {text}

        </a>
    )
}
export default OutboundLink;