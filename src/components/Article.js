import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        })
    }

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