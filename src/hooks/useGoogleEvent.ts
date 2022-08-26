import { useCallback } from 'react'
import { GAEvent } from '../lib/types'
import { event } from "../lib/gtag";
const useGoogleEvent = useCallback(({action,category,label,value}:GAEvent) => {
    event({action,category,label,value})
    }
  ,[]
)
export default useGoogleEvent;