import React from 'react'
import { ChannelList, userChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react'
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel_list_sidebar'>
        <div className='channel_list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt='Hospital' width='30' />
            </div>
        </div>
        <div className='channel_list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt='Logout' width='30' />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text' >Medical Pager</p>
    </div>
)


const ChannelListContainer = () => {
    return (<>
        <SideBar />
        <div className='channel_list__list__wrapper'><CompanyHeader />
            <ChannelSearch />
        </div>
    </>
    )
}

export default ChannelListContainer