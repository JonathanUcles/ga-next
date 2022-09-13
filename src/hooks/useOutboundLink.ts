import { useCallback } from 'react'
import { OutBoundEvent } from './types'


const useOutBoundLink = useCallback((link:string, outboundLinkEvent:OutBoundEvent,target?:string) => {
    const { event_category, event_label, event_callback } = outboundLinkEvent;
    // when target is on a new window
    const newWindowTrack = () =>{
        gtag('event', link, {
            'event_category': 'Outgoing Links',
            'event_label': document.location.pathname + document.location.search
        });

    }
    // no target 
   const sameWindowTrack = ()=>{
    if(event_callback){
        window.gtag("event", link, {
            event_category,
            event_label,
            event_callback
        })
        setTimeout(() => {
            event_callback()
            
        } ,1000);

    }else {
        window.gtag("event", link, {
            event_category,
            event_label,
        })

    }
    target ?  newWindowTrack():sameWindowTrack()
    
   }
    
    
    }
  ,[]
)
export default useOutBoundLink;