import React, { useState } from 'react'
import Box from './box'

export default function MenuBar(props) {
    const [name, setname] = useState(false)
    const [img, setimg] = useState()
    const [actor, setactor] = useState()
    console.log(props.array)
    return (
        <div className='Menubar_Outline'>
            <div className='First_Heading'>
                <div className='Heading_part1'>
                    Live Channels
                </div>
                <div className='Heading_part2'>
                    <select className='Select'>
                        <option className='Option'> Popular</option>
                        <option className='Option'> Wells</option>
                    </select>
                </div>
            </div>
            <div className='Menu_Option_Table'>
                {props.check&&props.array.map((res)=>{
                    console.log(res.i.imageUrl,res.l,res.s);
                    return <Box img={res.i.imageUrl} name={res.l} actor={res.s}/>
                })

                }
            </div>
        </div>
    )
}
