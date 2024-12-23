import { List, Button } from 'antd';
import { Link } from 'react-router-dom';

const CarsPage = () => {
    const cars = [
      { id: 1, name: 'Model X', image: '/img/modelJT.png' },
      { id: 2, name: 'Model JT', image: '/img/modelX.png' },
    ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cars</h1>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={cars}
        renderItem={car => (
          <List.Item>
            <div style={{ textAlign: 'center' }}>
              <img
                src={car.image}
                alt={car.name}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <h3>{car.name}</h3>
              <Link to={`/cars/${car.id}`}>
                <Button type="primary">View Details</Button>
              </Link>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CarsPage;
