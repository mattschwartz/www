import React from 'react'
import Prologue from './Prologue'
import January2012 from './January2012'
import July2012 from './July2012'
import May2013 from './May2013'
import Summer2013 from './Summer2013'
import Remnants from './Remnants'

import '../../styles/stoneQuest.css'

export default () => (
    <div className="stonequest">
        <h3 className="section-header">The Life and Death of StoneQuest</h3>

        <Prologue />
        <January2012 />
        <July2012 />
        <May2013 />
        <Summer2013 />
        <Remnants />
    </div>
)
