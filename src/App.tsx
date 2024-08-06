// App.tsx
import React from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import Dashboard from './components/dashboard';
import Client from './layout/client';
import ProductList from './components/productlist';
import Addproduct from './components/addproduct';
import EditProduct from './components/editProduct';
import List from './components/list';
import CategoryList from './components/category/categoryList';
import CategoryAdd from './components/category/categoryAdd';
import CategoryEdit from './components/category/categoryEdit';
import Search from './components/search';
import { IProduct, FormData } from './interface/product';
import { ICategory, FormCate } from './interface/category';
import { AddProduct, DeleteProductById, GetAllProducts, UpdateProduct } from './services/product';
import { AddCategory, DeleteCategoryById, GetAllCategorys, UpdateCategory } from './services/category';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryProducts from './components/categoryProduct';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  const [products, setProduct] = React.useState<IProduct[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [categorys, setCategory] = React.useState<ICategory[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const data = await GetAllProducts();
      setProduct(data);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const data = await GetAllCategorys();
      setCategory(data);
    })();
  }, []);

  const deleteProduct = async (id: string | number) => {
    if (confirm('Bạn chắc chứ?')) {
      try {
        await DeleteProductById(id);
        alert('Xóa thành công');
        setProduct(products.filter(product => product.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onAdd = async (data: FormData) => {
    try {
      const product = await AddProduct(data);
      alert('Thêm mới thành công');
      setProduct([...products, product]);
      navigate('/dashboard/product-list');
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdate = async (data: FormData, id: number | string) => {
    try {
      const dataproduct = await UpdateProduct(data, id);
      alert('Cập nhật thành công');
      setProduct(products.map(product => (product.id === id ? dataproduct : product)));
      navigate('/dashboard/product-list');
    } catch (error) {
      console.error(error);
    }
  };

  const categoryDelete = async (id: string | number) => {
    if (confirm('Bạn chắc chứ?')) {
      try {
        await DeleteCategoryById(id);
        alert('Xóa thành công');
        setCategory(categorys.filter(category => category.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const add = async (data: FormCate) => {
    try {
      const category = await AddCategory(data);
      alert('Thêm mới thành công');
      setCategory([...categorys, category]);
      navigate('/dashboard/category');
    } catch (error) {
      console.error(error);
    }
  };

  const update = async (data: FormCate, id: number | string) => {
    try {
      const datacategory = await UpdateCategory(data, id);
      alert('Cập nhật thành công');
      setCategory(categorys.map(category => (category.id === id ? datacategory : category)));
      navigate('/dashboard/category');
    } catch (error) {
      console.error(error);
    }
  };

  const element = useRoutes([
    {
      path: '',
      element: <Client />,
      children: [
        { path: '', element: <Home products={products} /> },
        { path: 'list', element: <List products={products} /> },
        { path: 'detail/:id', element: <Detail products={products} /> },
        { path: 'search', element: <Search /> },
        { path: 'category/:id', element: <CategoryProducts/> },
        {path:'register',Component:Register},
        {path:'login',Component:Login},
      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      children: [
        { path: 'product-list', element: <ProductList deleteProduct={deleteProduct} products={products} /> },
        { path: 'product/add', element: <Addproduct onAdd={onAdd} /> },
        { path: 'product/edit/:id', element: <EditProduct onUpdate={onUpdate} /> },
        { path: 'category', element: <CategoryList categoryDelete={categoryDelete} categorys={categorys} /> },
        { path: 'category/add', element: <CategoryAdd add={add} /> },
        { path: 'category/edit/:id', element: <CategoryEdit update={update} /> },
      ],
    },
  ]);

  return element;
}

export default App;
