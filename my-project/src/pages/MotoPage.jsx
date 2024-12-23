import { List, Button } from 'antd';
import { Link } from 'react-router-dom';

const MotoPage = () => {
  const motos = [
    { id: 1, name: 'Harley Davidson', image: '/img/Harley Davidson.png' },
    { id: 2, name: 'Yamaha R1', image: '/img/Yamaha R1.png' },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Motorcycles</h1>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={motos}
        renderItem={moto => (
          <List.Item>
            <div style={{ textAlign: 'center' }}>
              <img
                src={moto.image}
                alt={moto.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover', 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              />
              <h3>{moto.name}</h3>
              <Link to={`/moto/${moto.id}`}>
                <Button type="primary">View Details</Button>
              </Link>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MotoPage;
