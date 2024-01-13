import { TestBed } from '@angular/core/testing';
import { SimulaService } from './simula.service';

describe('SimulaService', () => {
  let service: SimulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate heat transfer rate correctly', () => {
    const panelArea = 10;
    const panelEfficiency = 0.8;
    const tankTemperature = 50;
    const ambientTemperature = 25;
    const expectedHeatTransferRate = 200;

    const heatTransferRate = service['calculateHeatTransferRate'](
      panelArea,
      panelEfficiency,
      tankTemperature,
      ambientTemperature
    );

    expect(heatTransferRate).toEqual(expectedHeatTransferRate);
  });

  it('should calculate tank temperature correctly', () => {
    const tankTemperature = 50;
    const heatTransferRate = 200;
    const tankMass = 100;
    const tankSpecificHeat = 1;
    const timeStep = 0.1;
    const expectedTankTemperature = 49.8;

    const newTankTemperature = service['calculateTankTemperature'](
      tankTemperature,
      heatTransferRate,
      tankMass,
      tankSpecificHeat,
      timeStep
    );

    expect(newTankTemperature).toEqual(expectedTankTemperature);
  });

  it('should calculate panel temperature correctly', () => {
    const panelTemperature = 30;
    const heatTransferRate = 200;
    const panelMass = 50;
    const panelSpecificHeat = 0.5;
    const timeStep = 0.1;
    const expectedPanelTemperature = 30.2;

    const newPanelTemperature = service['calculatePanelTemperature'](
      panelTemperature,
      heatTransferRate,
      panelMass,
      panelSpecificHeat,
      timeStep
    );

    expect(newPanelTemperature).toEqual(expectedPanelTemperature);
  });

  it('should calculate water temperature correctly', () => {
    const waterTemperature = 40;
    const heatTransferRate = 200;
    const waterMass = 80;
    const waterSpecificHeat = 0.8;
    const timeStep = 0.1;
    const expectedWaterTemperature = 40.2;

    const newWaterTemperature = service['calculateWaterTemperature'](
      waterTemperature,
      heatTransferRate,
      waterMass,
      waterSpecificHeat,
      timeStep
    );

    expect(newWaterTemperature).toEqual(expectedWaterTemperature);
  });

  it('should calculate water tank temperature correctly', () => {
    const waterTankTemperature = 45;
    const heatTransferRate = 200;
    const waterTankMass = 120;
    const waterTankSpecificHeat = 1.2;
    const timeStep = 0.1;
    const expectedWaterTankTemperature = 45.2;

    const newWaterTankTemperature = service['calculateWaterTankTemperature'](
      waterTankTemperature,
      heatTransferRate,
      waterTankMass,
      waterTankSpecificHeat,
      timeStep
    );

    expect(newWaterTankTemperature).toEqual(expectedWaterTankTemperature);
  });

  it('should run calculations over time correctly', () => {
    const data = {
      panelArea: 10,
      panelEfficiency: 0.8,
      tankTemperature: 50,
      ambientTemperature: 25,
      panelMass: 50,
      panelSpecificHeat: 0.5,
      waterMass: 80,
      waterTemperature: 40,
      waterSpecificHeat: 0.8,
      waterTankMass: 120,
      waterTankTemperature: 45,
      waterTankSpecificHeat: 1.2,
      tankMass: 100,
      tankSpecificHeat: 1,
      totalTime: 10,
      timeStep: 0.1,
    };

    service.runCalculationsOverTime(data);

    // Add your assertions here
  });
});
