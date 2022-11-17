import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';


function App() {
  
  return (
    <>
    <Container>
      <Row><Header/></Row>
      <Row><Main/></Row>
      <Row><Footer/></Row>
    </Container>
    </>
  );
}

export default App;
