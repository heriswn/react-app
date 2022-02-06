import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "./Post";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        }
    }

    getPostAPI = () => {
        axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`).then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res)=>{
            console.log(res)
            this.getPostAPI()
        }, (err) => {
            console.log('error: ',err)
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI()
        })
    }

    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        formBlogPostNew['id'] = timestamp;
        formBlogPostNew[e.target.name] = e.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        this.postDataToAPI()
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols={30} rows={10} placeholder="add blog content" onChange={this.handleFormChange} />
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost