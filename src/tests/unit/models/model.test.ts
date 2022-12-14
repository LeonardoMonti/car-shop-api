import mongoose from 'mongoose';
import * as sinon from 'sinon';
import { expect } from 'chai';

import CarModel from '../../../models/Car';
import { ICar } from '../../../interfaces/ICar';

import { idValid, validCar, validCarUpdated, validMotorcycle, validMotorcycleUpdated } from '../../utils/constants';

import MotorcycleModel from '../../../models/Motorcycle';
import { IMotorcycle } from '../../../interfaces/IMotorcycle';


describe('Testing Model', () => {
  beforeEach(() => sinon.restore())
  
  describe('1- Must create a new car', () => {
    let resultCar: ICar | null;
    
    before(async () => {
      const carModel = new CarModel();
      sinon.stub(mongoose.Model, 'create').resolves(validCar);
  
      resultCar = await carModel.create(validCar);
    });
  
    it('1.1 test creation function', async () => {
      expect(resultCar).to.have.property('_id');
    });
  });

  describe('2- Must consult all registered cars', () => {
    let resultCar: ICar[] | null;
  
    before(async () => {
      const carModel = new CarModel();
      sinon.stub(mongoose.Model, 'find').resolves([validCar]);
  
      resultCar = await carModel.read();
    });
  
    it('2.1 test read function', () => {
      expect(resultCar).to.be.an('array');
      expect(resultCar).to.have.lengthOf(1);
    });
  });

  describe('3- Must consult one car on database using valid ID', () => {
    let resultCar: ICar | null;
    
    before(async () => {
      const carModel = new CarModel();
      sinon.stub(mongoose.Model, 'findOne').resolves(validCar);

      resultCar = await carModel.readOne(idValid);
    });
  
    it('3.1 test readOne function', () => {
      expect(resultCar).to.have.property('_id');
    });
  });

  describe('4- Must change/update one car on database', () => {
    let resultCar: ICar | null;
  
    before(async () => {
      const carModel = new CarModel();
      sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarUpdated);
      
      resultCar = await carModel.update(idValid, validCarUpdated);
    });
  
    it('4.1 test function update', () => {
      expect(resultCar?.model).to.equals('Corolla GR Sport');
      expect(resultCar?.year).to.equals(2022);
      expect(resultCar?.color).to.equals('white');
    });
  });

  describe('5- Must remove/delete one car on database', () => {
    let resultCar: ICar | null;
  
    before(async () => {
      const carModel = new CarModel();
      sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validCar);
      
      resultCar = await carModel.delete(idValid);
    });
  
    it('5.1 test function delete', () => {
      expect(resultCar).to.have.property('_id');
    });
  });
})

describe('Testing Model', () => {
  beforeEach(() => sinon.restore())
  
  describe('1- Must create a new motorcycle', () => {
    let resultMotorcycle: IMotorcycle | null;
    
    before(async () => {
      const motorcycleModel = new MotorcycleModel();
      sinon.stub(mongoose.Model, 'create').resolves(validMotorcycle);
  
      resultMotorcycle = await motorcycleModel.create(validMotorcycle);
    });
  
    it('1.1 test creation function', async () => {
      expect(resultMotorcycle).to.have.property('_id');
    });
  });

  describe('2- Must consult all registered motorcycles', () => {
    let resultMotorcycle: IMotorcycle[] | null;
  
    before(async () => {
      const motorcycleModel = new MotorcycleModel();
      sinon.stub(mongoose.Model, 'find').resolves([validMotorcycle]);
  
      resultMotorcycle = await motorcycleModel.read();
    });
  
    it('2.1 test read function', () => {
      expect(resultMotorcycle).to.be.an('array');
      expect(resultMotorcycle).to.have.lengthOf(1);
    });
  });

  describe('3- Must consult one motorcycle on database using valid ID', () => {
    let resultMotorcycle: IMotorcycle | null;
    
    before(async () => {
      const motorcycleModel = new MotorcycleModel();
      sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycle);

      resultMotorcycle = await motorcycleModel.readOne(idValid);
    });
  
    it('3.1 test readOne function', () => {
      expect(resultMotorcycle).to.have.property('_id');
    });
  });

  describe('4- Must change/update one motorcycle on database', () => {
    let resultMotorcycle: IMotorcycle | null;
  
    before(async () => {
      const motorcycleModel = new MotorcycleModel();
      sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validMotorcycleUpdated);
      
      resultMotorcycle = await motorcycleModel.update(idValid, validMotorcycleUpdated);
    });
  
    it('4.1 test function update', () => {
      expect(resultMotorcycle?.model).to.equals('Honda CB 1000');
      expect(resultMotorcycle?.year).to.equals(2022);
      expect(resultMotorcycle?.color).to.equals('white');
    });
  });

  describe('5- Must remove/delete one motorcycle on database', () => {
    let resultMotorcycle: IMotorcycle | null;
  
    before(async () => {
      const motorcycleModel = new MotorcycleModel();
      sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(validMotorcycle);
      
      resultMotorcycle = await motorcycleModel.delete(idValid);
    });
  
    it('5.1 test function delete', () => {
      expect(resultMotorcycle).to.have.property('_id');
    });
  });
})
