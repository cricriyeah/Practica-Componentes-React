import './App.css';
import { useState } from 'react';
import "./App.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CustomCard from './CustomCard';
import imagen2 from "./pngegg.png";
import search from "./search-icon.png"
import { Image } from 'react-bootstrap';


function App() {
  return (
    <div className="App " >
      <header className="App-header">
        <div className='px-4'>
          <div className='py-5 d-flex align-items-center '>
            <Image src={imagen2} alt="" width={200} height={200} className='me-5'/>
            <h1 className=''>Recetas de cocina</h1>
          </div>
          <div className='my-5'>
            <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="input-group">
                          <input class="form-control border-secondary py-2" type="search" value="search"/>
                          <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button">
                                  <img src={search} alt="" width={30} height={30} />
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <Container fluid>
          <Row>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
          </Row>

          <Row>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
            <Col className="custom-col">
              <CustomCard tittle={'Titulo'} text={'Est cillum nulla tempor dolore reprehenderit proident dolor qui quis consectetur mollit mollit veniam ullamco. '} />
            </Col>
          </Row>
        </Container>
        </div>
      
      </header>
    </div>
  );
}


export default App;