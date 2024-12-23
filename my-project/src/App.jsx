import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css';


import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import MotoPage from './pages/MotoPage';
import CarDetailPage from './pages/CarDetailPage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/cars">Cars</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/moto">Motorcycles</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/moto" element={<MotoPage />} />
            <Route path="/cars/:id" element={<CarDetailPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2024 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
