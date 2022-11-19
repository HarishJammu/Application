import {Link} from 'react-router-dom'
import './index.css'

const BlogsItems =props=>{
    const {blogsData}=props
    const {id,title,imageUrl,avatarUrl,author,topic}=blogsData
    

return (
    <Link to= {`/blogs/${id}`}>
    <div className="items-blogs">
        <li className="items-list">

       <img src={imageUrl}
        alt={`avatar${id}`} className="image-items"/>
        <div className="details-items">
        <p className="description">{topic}</p>
        <p className="title">{title}</p>
        <div className="user-details">
            <img src={avatarUrl} className="userimage" alt={`avatar${id}`}/>
            <p className="author-name">{author}</p>
        </div>
            </div>
        </li>
        
    
    </div>
    </Link>
)}
export default BlogsItems;