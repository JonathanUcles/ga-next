import React from "react";

import {render} from '@testing-library/react'

import GoogleAnalytics from "./GoogleAnalytics";

describe('GoogleAnalytics', () => { 
    test("Renders Google Analytics Tag",()=>{
        render(<GoogleAnalytics />)
    })
 })