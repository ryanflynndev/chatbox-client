import React from 'react'


class Message extends React.Component {


    render() {
        console.log("triggered")
        return (
        <p>{this.props.message.user}: {this.props.message.body}</p>
        )
        
    }
}

export default Message