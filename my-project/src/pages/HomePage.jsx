import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        Welcome to the Vehicle Showcase
        <p>p.s AI-generated painting</p>
      </h1>
      <img
        src="/img/CarsMotorcyclesExhibition, made with AI.png"
        alt="Cars and Motorcycles"
        style={{
          width: '100%',          
          maxWidth: '800px',      
          height: 'auto',         
          borderRadius: '10px',   
          marginBottom: '20px',   
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          objectFit: 'cover',     
        }}
      />
      <div>
        <Link to="/cars">
          <Button type="primary" style={{ margin: '10px' }}>
            View Cars
          </Button>
        </Link>
        <Link to="/moto">
          <Button type="default" style={{ margin: '10px' }}>
            View Motorcycles
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
