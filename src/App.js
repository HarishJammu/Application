import {BrowserRouter,Route,Routes} from 'react-router-dom'
import BlogsItemsDetails from './components/BlogsItemsDetails'
import Headers from './components/Headers'
import BlogsList from './components/BlogsList'
import About from './components/About'
import Contact from './components/Contact'
import NotFound  from './components/NotFound'
import LoginForm from './components/LoginForm'


const App=()=>{
return (
<BrowserRouter>
<Headers/> 

<Routes>
 <Route exact path="/login" element={<LoginForm/>}/>
  <Route exact path="/" element={<BlogsList/>}/>
  <Route exact  path="/about" element={<About/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
  <Route exact path="/blogs/:id" element={<BlogsItemsDetails/>} />
  <Route element={<NotFound/>}/>
  </Routes>
  
  </BrowserRouter>
  
)}

export default App
