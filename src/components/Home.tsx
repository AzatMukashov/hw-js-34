import { Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary my-4">Домашняя страница</h1>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Добро пожаловать на сайт! Рады вас видеть.
              </Card.Title>
              <Card.Text>
                Наша миссия - предоставлять первоклассные услуги и создавать
                непреходящую ценность для наших клиентов.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Наши ценности</Card.Title>
              <ul>
                <li>Подход, ориентированный на клиента</li>
                <li>Инновационные решения</li>
                <li>Честность и прозрачность</li>
                <li>Стремление к совершенству</li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Последние новости</Card.Title>
              <Card.Text>
                Следите за нашими предстоящими событиями и запусками продукции!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
