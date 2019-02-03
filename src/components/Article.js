import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        } 
    }

    render(){
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? "close" : "open"}
                </button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody(){
        if(!this.state.isOpen) return null
        const {article} = this.props;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments}/>
            </div>
        )
    }
}