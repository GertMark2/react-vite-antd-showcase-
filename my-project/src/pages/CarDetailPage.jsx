import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const CarDetailPage = () => {
  const { id } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Card title={`Car Details - ID: ${id}`} bordered={false}>
        <p>More details about the car with ID: {id}</p>
      </Card>
    </div>
  );
};

export default CarDetailPage;
