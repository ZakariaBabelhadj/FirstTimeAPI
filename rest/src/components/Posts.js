import React ,{ Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component{
    deleteHandler = () =>{
        this.props.deletepost(this.props.post.id)
    }
    render(){
        
        const {posts} = this.props
        const postsView = posts.length ? (
            posts.map(post =>{
                return(
                    <div className="post card" key={post.id}>
                        <span className="red-text" >{ post.content}</span>
                        <div className="right"><button onClick={this.deleteHandler} className="btn grey">delete</button></div>
                    </div>
                )
            })
        ) : (
            <h4 className="center red-text">No Posts Yet</h4>
        )
        return(
            
            <div>
                <h1 className="center">i m working</h1>
                <div className="container">
                    {postsView}
                 </div>
            </div>
        )
    }
}
const State = (state) =>{
    return{
        posts:state.posts
    }
}
const deletePosts = (dispatch) =>{
    return{ 
        deletepost: (id) => { dispatch({type:'DELETE_POST', id: id}) }
    }
}

export default connect(State,deletePosts)(Post);