import React from 'react'
import MenuBar from './MenuBar'

export default function FirstPic(props) {
  return (
    <>
      <div className='ALL1'>
        <div className='All_First_Movie'>
          <div className='Main_Movie'>
            <img src={props.pic} alt='pic'className='main_moive_pic'/>
          </div>
          <div className='Main_Movie_Info_Box'>
            <div className='Main_Movie_Info_Box_inside'>
              <div className='Movie_Name'>
                {props.name}
              </div>
              <div className='Movie_Type'>
                {props.actor}
              </div>
              <button className='Watch_Button'>
                Watch
              </button>
            </div>
          </div>
        </div>
        <MenuBar check={props.check} array={props.array} />
      </div>
    </>
  )
}
