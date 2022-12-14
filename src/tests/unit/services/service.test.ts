import * as sinon from 'sinon';
import { expect } from 'chai';
import mongoose from 'mongoose';

import { ICar } from '../../../interfaces/ICar';
import { ServiceError } from '../../../services';
import CarService from '../../../services/CarService';

import { IMotorcycle } from '../../../interfaces/IMotorcycle';
import MotorcyleService from '../../../services/MotorcyleService';

import { idValid, validCar, validCarUpdated, validMotorcycle, validMotorcycleUpdated } from '../../utils/constants';

describe('Testing Service', () => {
  beforeEach(() => sinon.restore())

  describe('1- Must create a new car', () => {
    let resultCar: ICar | ServiceError | null;
    
    it('1.1 Test create car function on Service passing data correctly', async () => {
      const carService = new CarService();
      sinon.stub(mongoose.Model, 'create').resolves(validCar);
  
      resultCar = await carService.create(validCar);

      expect(resultCar).to.have.property('model');
    });
  });

  describe('2- Must consult all registered cars', () => {
    let resultCar: ICar[] | null;
  
    before(async () => {
      const carService = new CarService();
      sinon.stub(mongoose.Model, 'find').resolves([validCar]);

      resultCar = await carService.read();
    });
  
    it('2.1 Test function on Service list all cars', () => {
      expect(resultCar).to.be.an('array');
      expect(resultCar).to.have.lengthOf(1);
    });
  });

  describe('3 - Must consult one car on database using valid ID', () => {
    let resultCar: ICar | ServiceError | null;
  
    before(async () => {
      const carService = new CarService();
      sinon.stub(mongoose.Model, 'findOne').resolves(validCar);

      resultCar = await carService.readOne(idValid);
    });
  
    it('3.1 Test function on Service get one car valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });

  describe('4- Must change/update one car on database', () => {
    let resultCar: ICar | ServiceError | null;
  
    before(async () => {
      const carService = new CarService();
      sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarUpdated);
  
      resultCar = await carService.update(idValid, validCar);
    });
  
    it('4.1 Test function on Service update one car using valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });
  
  describe('5- Must remove/delete one car on database', () => {
    let resultCar: ICar | ServiceError | null;
  
    before(async () => {
      const carService = new CarService();
      sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validCar);
  
      resultCar = await carService.delete(idValid);
    });
  
    it('5.1 Test function on Service delete one car using Valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });
})


describe('Testing Service', () => {
  beforeEach(() => sinon.restore())

  describe('1- Must create a new Motorcyle', () => {
    let resultCar: IMotorcycle | ServiceError | null;
    
    it('1.1 Test create Motorcyle function on Service passing data correctly', async () => {
      const motorcycleService = new MotorcyleService();
      sinon.stub(mongoose.Model, 'create').resolves(validMotorcycle);
  
      resultCar = await motorcycleService.create(validMotorcycle);

      expect(resultCar).to.have.property('model');
    });
  });

  describe('2- Must consult all registered Motorcyles', () => {
    let resultCar: IMotorcycle[] | null;
  
    before(async () => {
      const motorcycleService = new MotorcyleService();
      sinon.stub(mongoose.Model, 'find').resolves([validMotorcycle]);

      resultCar = await motorcycleService.read();
    });
  
    it('2.1 Test function on Service list all Motorcyles', () => {
      expect(resultCar).to.be.an('array');
      expect(resultCar).to.have.lengthOf(1);
    });
  });

  describe('3 - Must consult one Motorcyle on database using valid ID', () => {
    let resultCar: IMotorcycle | ServiceError | null;
  
    before(async () => {
      const motorcycleService = new MotorcyleService();
      sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycle);

      resultCar = await motorcycleService.readOne(idValid);
    });
  
    it('3.1 Test function on Service get one Motorcyle valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });

  describe('4- Must change/update one Motorcyle on database', () => {
    let resultCar: IMotorcycle | ServiceError | null;
  
    before(async () => {
      const motorcycleService = new MotorcyleService();
      sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validMotorcycleUpdated);
  
      resultCar = await motorcycleService.update(idValid, validMotorcycle);
    });
  
    it('4.1 Test function on Service update one Motorcyle using valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });
  
  describe('5- Must remove/delete one Motorcyle on database', () => {
    let resultCar: IMotorcycle | ServiceError | null;
  
    before(async () => {
      const motorcycleService = new MotorcyleService();
      sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validMotorcycle);
  
      resultCar = await motorcycleService.delete(idValid);
    });
  
    it('5.1 Test function on Service delete one Motorcyle using Valid ID', () => {
      expect(resultCar).to.have.property('_id');
    });
  });
})




