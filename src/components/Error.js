import React from 'react'

const Error = ({error}) => (
    <div>
        <p>Sorry something went wrong...</p>
        <p>Message:</p>
        <p>{error}</p>
    </div>
)

export default Error