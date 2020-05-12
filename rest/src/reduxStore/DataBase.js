const initPosts = {
    posts:[
        {id:1, content:"i m doing nthing"},
        {id:2, content:"i m trying to learn something"}
      ]
}

const DataBase = (state = initPosts, action) =>{
    if (action.type === 'DELETE_POST'){
        let newPosts =  state.posts.filter(post =>{
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default DataBase