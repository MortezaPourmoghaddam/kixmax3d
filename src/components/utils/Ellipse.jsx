import React from 'react'

const Ellipse = ({ className ,...props}) => {
    return (
        <div className={`absolute rounded-full ${className}`} {...props} />
    )
}

export default Ellipse