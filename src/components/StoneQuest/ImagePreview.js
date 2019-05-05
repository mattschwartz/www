import React from 'react'

export default ({ image, description, antialias, width }) => (
    <img width={width} className="inline-preview" style={{ imageRendering: antialias ? 'auto' : 'pixelated' }} src={image} alt={description} />
)
