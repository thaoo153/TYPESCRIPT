import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from './api/product';
import {
  // HomePage,
  ProductPage,
  ProductDetailPage,
  AddProductPage,
  ProductManagementPage,
  UpdateProductPage,
} from './pages/index';
import { ICate, IProduct, IUser } from './types/product';
// import { AdminLayout } from './pages/admin';
import AdminLayout from './pages/admin/AdminLayout';
import SignUp from './pages/admin/account/Signup';
import LogIn from './pages/admin/account/LogIn';
import Category from './pages/admin/Category/Category';
import { addCate, deleteCate, getAllCate, updateCate } from './api/category';
import AddCategory from './pages/admin/Category/AddCategory';
import UpdateCategory from './pages/admin/Category/UpdateCategory';
import ListUser from './pages/admin/User/ListUser';
import { deleteUser, getAllUser } from './api/user';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);
  const onHandleRemove = (id: number) => {
    // Sử dụng hàm confirm để xác nhận việc xóa
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      deleteProduct(id).then(() =>
        setProducts(products.filter((item: IProduct) => item.id !== id))
      );
    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => {
      window.confirm('Product added successfully.');
      getAllProduct().then(({ data }) => setProducts(data))
    });
  };
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => {
      window.confirm('Product updated successfully.');
      getAllProduct().then(({ data }) => setProducts(data))
    });
  };

  //Cate
  const [categories, setCategories] = useState<ICate[]>([]);
  useEffect(() => {
    getAllCate().then(({ data }) => setCategories(data));
  }, []);
  const onHandleAddCate = (cate: ICate) => {
    addCate(cate).then(() => {
      window.confirm('Category added successfully.');
      getAllCate().then(({ data }) => setCategories(data))
    });
  };
  const onHandleRemoveCate = (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this category?');
    if (confirmDelete) {
      deleteCate(id).then(() =>
        setCategories(categories.filter((item: ICate) => item.id !== id))
      );
    }
  }
  const onHandleUpdateCate = (cate: ICate) => {
    updateCate(cate).then(() => {
      window.confirm('Product updated successfully.');
      getAllCate().then(({ data }) => setCategories(data))
    });
  };

  //Users
  const [users, setUser] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUser().then(({ data }) => setUser(data));
  }, []);
  const onHandleRemoveUser = (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this category?');
    if (confirmDelete) {
      deleteUser(id).then(() =>
        setUser(users.filter((item: IUser) => item.id !== id))
      );
    }
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          {/* <Route index element={<HomePage />} /> */}
          <Route
            index
            // path='products'
            element={<ProductPage products={products} onRemove={onHandleRemove} />}
          />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route
            path=':id'
            element={<ProductDetailPage products={products} />}
          />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
          <Route path='category'>
            <Route index element={<Category categories={categories} onRemove={onHandleRemoveCate} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleAddCate} />} />
            <Route path=':id/update' element={<UpdateCategory onUpdate={onHandleUpdateCate} categories={categories} />} />
          </Route>
          <Route path='user'>
            <Route index element={<ListUser users={users} onRemove={onHandleRemoveUser} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
