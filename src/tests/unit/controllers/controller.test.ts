import * as sinon from 'sinon';
import chai, { expect } from 'chai';
import mongoose from 'mongoose';
import chaiHttp from 'chai-http';

import App from '../../../app';

import { idValid, validCar, validCarUpdated, validMotorcycle, validMotorcycleUpdated} from '../../utils/constants';

chai.use(chaiHttp);

describe('Testing Controller', () => {
  before(() => {
    sinon.stub(mongoose.Model, 'create').resolves(validCar as any);
    sinon.stub(mongoose.Model, 'find').resolves([validCar] as any);
    sinon.stub(mongoose.Model, 'findOne').resolves(validCar as any);
    sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarUpdated as any);
    sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validCar as any);
  })

  after(() => sinon.restore())

  describe('1- When entering a new car', () => {
    it('1.1 tests the Controller create function by entering all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .post('/cars').send(validCar);
  
      expect(chaiHttpResponse).to.have.status(201);
    });
  });

  describe('2- Query all cars registered in the database', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'find').resolves([validCar] as any);
    // });
  
    it('2.1 tests the Controller read function by informing all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .get('/cars');
  
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.an('array');
    });
  });

  describe('3- Query a car in the database', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'findOne').resolves(validCar as any);
    // });
  
    it('3.1 tests the Controller readOne function by informing the correct ID', async () => {
      const chaiHttpResponse = await chai.request(App)
        .get(`/cars/${idValid}`);
  
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.property('_id');
    });
  });

  describe('Altera um carro no banco de dados', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarUpdated as any);
    // });
  
    it('4- tests the Controller update function by informing all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .put(`/cars/${idValid}`)
        .send(validCar);
        
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body.model).to.be.equal('Corolla GR Sport');
      expect(chaiHttpResponse.body.year).to.be.equal(2022);
      expect(chaiHttpResponse.body.color).to.be.equal('white');
    });
  });

  describe('5- Remove a car from the database', () => {
    it('5.1 tests the Controller delete function by informing the correct ID', async () => {
      const chaiHttpResponse = await chai.request(App)
        .delete(`/cars/${idValid}`);
  
      expect(chaiHttpResponse).to.have.status(204);
    });
  });
})

describe('Testing Controller', () => {
  before(() => {
    sinon.stub(mongoose.Model, 'create').resolves(validMotorcycle as any);
    sinon.stub(mongoose.Model, 'find').resolves([validMotorcycle] as any);
    sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycle as any);
    sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validMotorcycleUpdated as any);
    sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validMotorcycle as any);
  })

  after(() => sinon.restore())

  describe('1- When entering a new Motorcycle', () => {
    it('1.1 tests the Controller create function by entering all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .post('/motorcycles').send(validMotorcycle);
  
      expect(chaiHttpResponse).to.have.status(201);
    });
  });

  describe('2- Query all motorcycles registered in the database', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'find').resolves([validMotorcycle] as any);
    // });
  
    it('2.1 tests the Controller read function by informing all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .get('/motorcycles');
  
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.an('array');
    });
  });

  describe('3- Query a Motorcycle in the database', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycle as any);
    // });
  
    it('3.1 tests the Controller readOne function by informing the correct ID', async () => {
      const chaiHttpResponse = await chai.request(App)
        .get(`/motorcycles/${idValid}`);
  
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.property('_id');
    });
  });

  describe('Altera um carro no banco de dados', () => {
    // before(() => {
    //   sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarUpdated as any);
    // });
  
    it('4- tests the Controller update function by informing all the data correctly', async () => {
      const chaiHttpResponse = await chai.request(App)
        .put(`/motorcycles/${idValid}`)
        .send(validMotorcycle);
        
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body.model).to.be.equal('Honda CB 1000');
      expect(chaiHttpResponse.body.year).to.be.equal(2022);
      expect(chaiHttpResponse.body.color).to.be.equal('white');
    });
  });

  describe('5- Remove a Motorcycle from the database', () => {
    it('5.1 tests the Controller delete function by informing the correct ID', async () => {
      const chaiHttpResponse = await chai.request(App)
        .delete(`/motorcycles/${idValid}`);
  
      expect(chaiHttpResponse).to.have.status(204);
    });
  });
})