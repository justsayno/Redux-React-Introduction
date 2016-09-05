import React from 'react'

const Error = ({error}) => (
    <div className='error center-align'>
        <p>Sorry something went wrong...</p>
        <img src='/src/images/error.png' />
        <p>{error}</p>
    </div>
)

export default Error