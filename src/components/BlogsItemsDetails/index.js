import {Component} from 'react'
import './index.css'

 const blogaData={
    id:1,
    blog:"harish",
    avatarUrl:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1666253774~exp=1666254374~hmac=ed077f730c54bf4c8dcb45ed33e8decf198b57d70e21da05525261c6c42c0840",
    name:"authorName",
    imageUrl:"https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=740&t=st=1666249576~exp=1666250176~hmac=3974e7c9c6ae03ee43626a52bc9396417f981b1cb9fc178f650e16e8c9cb2f15",
    topic:"react.js",
    content:"jlbhsdbhkdbvfhfhkvfvbkfbvfkhvbfvkjfbvfhvbfvb fvhbkvf b vfbkf fhdvf d f j k fv f gff fglqgevgef"

 }
class BlogsItemsDetails extends Component{

    
        
    
   componentDidMount(){
    this.getBlogsDetails()
   }

   getBlogsDetails=()=>{
    console.log(this.props)
   }



    renderBlogItemsDetails=()=>{
       const {avatarUrl,imageUrl,name,topic,content}=blogaData
        return(<div className="blogsDetailFirstCont">
        <h1>{topic}</h1>
            <div className="blogsDetalsSecondCont">
                <img src={avatarUrl}
                  className="avarat-image"alt="avatar"/>
                <h1 className="AuthorNameBlogDetails">{name}</h1>

            </div>
            <img src={imageUrl}
            alt="avatar" className="TopicImageFromBlog"/>
            <p className="BlogContent">{content}</p>
        </div>
        )
    }

    render(){
        
        return(
            <div className="detail-container">
               
                {this.renderBlogItemsDetails()}
            </div>
        )
    }
}
export default BlogsItemsDetails