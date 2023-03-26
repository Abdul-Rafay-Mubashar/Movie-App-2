import React from 'react'
import { useState } from 'react'

export default function Box(props) {

    return (
        <>
            <div className='box'>
                <div className='box_inside'>
                    <div className='movie_img'>
                        <img src={props.img} alt='pic' className='check_movie' />
                    </div>
                    <div className='movie_data'>
                        <div className='movie_data_name'>
                            {props.name}
                        </div>
                        <div className='movie_data_type'>
                            {props.actor}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
