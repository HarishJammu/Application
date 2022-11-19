import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import  BlogsItems from '../BlogsItems'
import './index.css'



class BlogsList extends Component{
    state={blogsData:[],isLoader:true}

    componentDidMount(){
        this.getBlogData()
    }
    

    getBlogData=async ()=>{
        const apiUrl="https://apis.ccbp.in/blogs"
        const response=await fetch(apiUrl)
        const data=await response.json()
        const updateData=data.map(eachItem=>({
            id:eachItem.id,
            imageUrl:eachItem.image_url,
            avatarUrl:eachItem.avatar_url,
            title:eachItem.title,
            author:eachItem.author,
            topic:eachItem.topic,
        }))
        this.setState({blogsData:updateData,isLoader:false})
    }
    render(){
        const {blogsData,isLoader}=this.state
        return(
            <div className="list-container">
         {isLoader?<Loader type="Rings" color="#409c63" height={100} width={100}/>:
         blogsData.map(items=>
            (<BlogsItems blogsData={items} key={items.id}/>)
         )}
</div>
        )
    }
}
export default BlogsList