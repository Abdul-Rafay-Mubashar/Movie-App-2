import React from 'react'
import FirstPic from './FirstPic'

export default function SideBar(props) {
    return (
        <div className='all'>
            <div className='sidebar_outline'>
                <div className='sidebar_part1'>
                    <div className='part1_com1'>
                        <div className='com_inside1'>
                            <div className='img_com'>
                                <img src='https://www.clipartmax.com/png/middle/41-410289_png-file-tv-icon-vector-png.png' className='img' />
                            </div>
                            <div className='Textpart'>
                                News Feed
                            </div>
                        </div>
                    </div>
                    <div className='part1_com1'>
                        <div className='com_inside'>
                            <div className='img_com'>
                                <img src='https://www.clipartmax.com/png/middle/344-3449453_trend-business-trend-business-trends-icon-trending-icon-svg.png' className='img' />
                            </div>
                            <div className='Textpart'>
                                Trending
                            </div>
                        </div>
                    </div>
                    <div className='part1_com1'>
                        <div className='com_inside'>
                            <div className='img_com'>
                                <img src='http://cdn.onlinewebfonts.com/svg/img_416807.png' className='img' />
                            </div>
                            <div className='Textpart'>
                                Following
                            </div>
                        </div>
                    </div>
                    <div className='part1_com1'>
                        <div className='com_inside'>
                            <div className='img_com'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2rY9NPXJ6kUm81L9qD6zc1pLyG9Gj-M49pNuGAmpYsOm0vCjuacHNKV3OT03XjgzCJo&usqp=CAU' className='img' />
                            </div>
                            <div className='Textpart'>
                                Your Videos
                            </div>
                        </div>
                    </div>
                    <div className='part1_com1'>
                        <div className='com_inside'>
                            <div className='img_com'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-g-ymvgE2KoBKoBd_SFz2pbnHwCJP18czP2jXrClm7zY8VNUbCKZxHRbnSXo3hKBGtc&usqp=CAU' className='img' />
                            </div>
                            <div className='Textpart'>
                                Playlist
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sidebar_part2'>
                    <div className='Heading'>
                        Following
                    </div>
                    <div className='part2_inside'>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Abdul
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Saad
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Akram
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Abbas
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Choudary
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Rafau
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                        <div className='part2_com'>
                            <div className='part2_com_inside'>
                                <div className='pic_img'>
                                    <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='pic_img1' />
                                </div>
                                <div className='name'>
                                    Dayan
                                </div>
                                <div className='last'>
                                    <img src='data:image/png;base64,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' className='down' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FirstPic pic={props.pic} name={props.name} actor={props.actor} array={props.array} check={props.check}/>
        </div>
    )
}
