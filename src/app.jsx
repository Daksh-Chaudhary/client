import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer } from './components';
import './App.css';

const apiKey = '2jm473rnwz3c';

const client = StreamChat.getInstance(apiKey);



const app = () => {
    return (
        <div className='app__wrapper'>
            <Chat client={client} theme='team light'>
                <ChannelListContainer
                />

                <ChannelContainer
                />
            </Chat>
        </div>
    )
}

export default app