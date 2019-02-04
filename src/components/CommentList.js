import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
    static defaultProps = {
        comments: [],
    }
    

    state = {
        isOpen: false
    }
    render(){
        const {isOpen} = this.state;
        const buttonText = isOpen ? 'close comments' : 'show commetnts'
        return (
            <div>
                <button onClick={this.showComment}>
                    {buttonText}
                </button>              
                {this.getComment()}
            </div>
        )
    }

    showComment = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComment(){
        if(!this.state.isOpen) return null

        const {comments} = this.props;
        
        if(!comments.length) return <p>no comment yet</p>
        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
        return <ul>{commentElements}</ul>       
    }
}