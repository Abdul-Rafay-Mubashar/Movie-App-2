import React from 'react'
import './App.css';

export default function (props) {
    return (
        <div className='NavBar_Outline'>
            <div className='NavBar_Part1'>
                <div className='Camera_Pic_Frame'>
                    <img src='https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg' className='Pic_Frame' />
                </div>
                <div className='text'>
                    <div className='adze'>
                        Adze.
                    </div>
                    <div className='design'>
                        DESIGN
                    </div>
                </div>
                <div className='NavBar_Circle'>
                    <div className='Div_Circle'>
                        <img src='https://i.pinimg.com/originals/d9/cb/d7/d9cbd76abe7d5b00631d70bc29b1649e.png' className='ring' />
                    </div>
                </div>
                <div className='Arrow'>
                    <img src='' className='Arrow_Button' />
                </div>
            </div>
            <div className='NavBar_Part2'>
                <div className='Search_Input'>
                    <img src='https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg' className='search_icon' onClick={props.data}/>
                    <input placeholder='Search Movie' className='Search_Movie' value={props.text} onChange={props.name}>
                    </input>
                </div>
                <div className='NavBar_Last'>
                    <div className='icon'>
                        <img src='https://icon2.cleanpng.com/20180719/igr/kisspng-small-business-computer-icons-crossword-message-icon-5b505cb62856b4.1713028615319932701652.jpg' className='pic' />
                    </div>
                    <div className='icon'>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg' className='pic' />
                    </div>
                    <div className='icon'>
                        <img src='https://lh3.googleusercontent.com/ogw/AAEL6sgYhPW-O_EDY5rEq489JuecrA2yxFq7tqH1jERZ=s32-c-mo' className='pic1' />
                    </div>
                </div>
            </div>
        </div>
    )
}
