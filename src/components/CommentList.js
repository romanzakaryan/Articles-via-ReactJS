import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({comments = [], isOpen, toggleOpen}){


    const buttonText = isOpen ? 'close comments' : 'show commetnts'
    return (
        <div>
            <button onClick={toggleOpen}>
                {buttonText}
            </button>              
            {getComment({comments, isOpen})}
        </div>
    )

    function getComment({comments, isOpen}){
        if(!isOpen) return null
        if(!comments.length) return <p>no comment yet</p>
        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
        return <ul>{commentElements}</ul>       
    }
}

export default toggleOpen(CommentList)