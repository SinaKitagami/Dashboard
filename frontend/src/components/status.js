import React from 'react';

const response = 0;
const isOnline = 0;//0がオンライン
var onlineStyle = "";
var onlineText = "";
if (isOnline == 0){
    onlineText = "オンライン";
    onlineStyle = "online";
}else{
    onlineText = "オフライン";
    onlineStyle = "offline";
}
class Status extends React.Component {
    render() {
        return (
            <div className="items">
                レスポンス速度:{response}ms<br />
                オンライン状況:<span className={onlineStyle}>{onlineText}</span>
            </div>
        );
    }
}
export default Status;