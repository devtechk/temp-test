import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//###########################################           COMMENT
function Comment(props) {
    return (
        <div className="Comment-main">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
//###########################################           AVATAR
function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    );
}
//###########################################           USERINFO
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
//###########################################           DATE
function formatDate(date) {
    return date.toLocaleDateString();
}

const comment = {
    date: new Date(),
    text: 'Text for my first comment in React',
    author: {
        name: 'Micky mouse',
        avatarUrl: 'https://goo.gl/uWs5pa',
    },
};

function App() {
    return (
        <Comment date={comment.date} text={comment.text} author={comment.author}/>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
