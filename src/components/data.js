import React from 'react'
import './api.css'

const Info = ({data}) => {
    return (
        <div className='body'>
            <div className='grid'>
                {
                    data.map(data =>
                        <div className='text'>
                      <img  src={data.recipe.image} alt="Card image cap" />
                      <h5 class="text">{data.recipe.label}</h5>
                      <p class="text">Total Amount Of Calories : {data.recipe.calories}</p>
                        </div>

                        ) }
            </div>
        </div>
    )
}

export default Info



