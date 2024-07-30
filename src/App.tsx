import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from './interface/product'
import { Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/detail'
import Dashboard from './components/dashboard'
import Client from './layout/client'
import { AddProduct, DeleteProductById, GetAllProducts, UpdateProduct } from './services/product'
import ProductList from './components/productlist'
import Addproduct from './components/addproduct'
import EditProduct from './components/editProduct'
import List from './components/list'
import { FormCate, ICategory } from './interface/category'
import { AddCategory, DeleteCategoryById, GetAllCategorys, GetCategoryByID, UpdateCategory } from './services/category'
import CategoryList from './components/category/categoryList'
import CategoryAdd from './components/category/categoryAdd'
import CategoryEdit from './components/category/categoryEdit'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag]=useState<number|string>(0)
  const [categorys,setCategory]=useState<ICategory[]>([])
  const navigate = useNavigate()
  useEffect(()=>{
      (async ()=>{
         const data = await GetAllProducts()    
         setProduct(data)     
      })()
  },[])
  useEffect(()=>{
    (async ()=>{
       const data = await GetAllCategorys()    
       setCategory(data)     
    })()
},[])
  const deleteProduct = async (id:string|number)=>{
    if (confirm('Bạn chắc chứ?')){
      try {
          const data = await DeleteProductById(id)
          alert('Xóa thành công')
          const newproducts = products.filter(product=>product.id !==id)
          setProduct(newproducts)
      } catch (error) {
        console.log(error);        
      }
    }
  }
  const onAdd = async (data:FormData)=>{
    try {
        const product = await AddProduct(data)
        alert('Thêm mới thành công')
        setProduct([...products,product])
        navigate('/dashboard/product-list')
    } catch (error) {
      
    }
  }
  const onUpdate = async (data:FormData,id:number|string)=>{
    try {
        const dataproduct = await UpdateProduct(data,id)
        alert('Cập nhật thành công')
        const newproducts = products.map(product=>(product.id==id)?dataproduct:product)
        setProduct(newproducts)
        navigate('/dashboard/product-list')
    } catch (error) {
      
    }
  }
  //////////////////////////
  const categoryDelete = async (id:string|number)=>{
    if (confirm('Bạn chắc chứ?')){
      try {
          const data = await DeleteCategoryById(id)
          alert('Xóa thành công')
          const newcategorys = categorys.filter(category=>category.id !==id)
          setCategory(newcategorys)
      } catch (error) {
        console.log(error);        
      }
    }
  }
  const add = async (data:FormCate)=>{
    try {
        const category = await AddCategory(data)
        alert('Thêm mới thành công')
        setCategory([...categorys,category])
        navigate('/dashboard/category')
    } catch (error) {
      
    }
  }
  const update = async (data:FormCate,id:number|string)=>{
    try {
        const datacategory = await UpdateCategory(data,id)
        alert('Cập nhật thành công')
        const newproducts = categorys.map(category=>(category.id==id)?datacategory:category)
        setCategory(newproducts)
        navigate('/dashboard/category')
    } catch (error) {
      
    }
  }
  const element = useRoutes([
    {path:'',Component:Client,children:[
        {path:'',element:<Home products={products}/>},
        {path:'list',element:<List products={products}/>},
        {path:'detail',element:<Detail/>},
    ]},
    {path:'dashboard',element:<Dashboard/>,children:[
        {path:'product-list',element:<ProductList deleteProduct={deleteProduct} products={products}/>},
        {path:'product/add',element:<Addproduct onAdd={onAdd}/>},
        {path:'product/edit/:id',element:<EditProduct onUpdate={onUpdate}/>},
        {path:'category',element:<CategoryList categoryDelete={categoryDelete} categorys={categorys}/>},
        {path:'category/add',element:<CategoryAdd add={add}/>},
        {path:'category/edit/:id',element:<CategoryEdit update={update}/>},
    ]},
  ])
  return element
}

export default App
