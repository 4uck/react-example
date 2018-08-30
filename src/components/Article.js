import React from 'react'

function Article() {
    const body = <section>body</section>

    return (
        <div className='hello'>
            <h2>title</h2>
            {body}
            <h3>create date: {(new Date()).toDateString()}</h3>
        </div>
    )
}

export default Article