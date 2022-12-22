import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import LayoutWeb from './components/Layout/layout'
import AddCategory from './pages/admin/categories/addCate'
import ListCategory from './pages/admin/categories/homePageCate'
import UpdateCate from './pages/admin/categories/updateCate'
import HomePageAdmin from './pages/admin/home'
import LoginAdmin from './pages/admin/loginAdmin'
import AddPost from './pages/admin/post/addPost'
import UpdatePost from './pages/admin/post/updatePost'
import PrivateRouter from './pages/admin/privateRouter'
import ListUser from './pages/admin/user/listUser'
import UpdateUser from './pages/admin/user/updateUser'
import AboutPage from './pages/user/about'
import AllBlogs from './pages/user/allBlogs'
import BlogPage from './pages/user/blog'
import Contact from './pages/user/contact'
import HomePageUser from './pages/user/home'
import Profile from './pages/user/profile'
import SignIn from './pages/user/signin'
import SignUp from './pages/user/signup'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePageUser />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/profile/:userID" element={<Profile />} />
        </Route>
          <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={ <PrivateRouter>
              <HomePageAdmin />
            </PrivateRouter>} />
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin/post/addPost" element={<AddPost />} />
            <Route path="/admin/post/updatePost/:id" element={<UpdatePost />} />
            <Route path="/admin/user/listUser" element={<ListUser />} />
            <Route path="/admin/user/updateUser/:id" element={<UpdateUser />} />
            <Route path="/admin/listCategory" element={<ListCategory />} />
            <Route path="/admin/addCategory" element={<AddCategory />} />
            <Route path="/admin/updateCategory/:id" element={<UpdateCate />} />
=        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
