import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons';

function Chat(){
    return (
        <div className="chat" > 
           <div className="chat__header" >
                <Avatar/>
                <div className="chat__headerInfo" >
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight" >
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
           </div>

            <div className="chat__body" >
                <p className="chat__message" >
                    <span className="chat__name" >Sonny</span>
                    This is a message
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat __reciever" >
                    <span className="chat__name" >Sonny</span>
                    This is a message
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>

            

        </div>
    );
}

export default Chat;