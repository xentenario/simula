import { Injectable } from '@angular/core';
import { SimulaEntryDataModel } from './simula-data-model';

@Injectable({ providedIn: 'root' })
export class SimulaService {
  // Create a method to calculate the heat transfer rate  between a solar panel and a storage tank
  private calculateHeatTransferRate(
    panelArea: number,
    panelEfficiency: number,
    tankTemperature: number,
    ambientTemperature: number
  ): number {
    const heatTransferRate =
      panelArea * panelEfficiency * (tankTemperature - ambientTemperature);
    return heatTransferRate;
  }

  // Create a method to calculate the temperature of the storage tank
  private calculateTankTemperature(
    tankTemperature: number,
    heatTransferRate: number,
    tankMass: number,
    tankSpecificHeat: number,
    timeStep: number
  ): number {
    const tankTemperatureChange =
      (heatTransferRate * timeStep) / (tankMass * tankSpecificHeat);
    const newTankTemperature = tankTemperature - tankTemperatureChange;
    return newTankTemperature;
  }

  // Create a method to calculate the temperature of the solar panel
  private calculatePanelTemperature(
    panelTemperature: number,
    heatTransferRate: number,
    panelMass: number,
    panelSpecificHeat: number,
    timeStep: number
  ): number {
    const panelTemperatureChange =
      (heatTransferRate * timeStep) / (panelMass * panelSpecificHeat);
    const newPanelTemperature = panelTemperature + panelTemperatureChange;
    return newPanelTemperature;
  }

  // Create a method to calculate the temperature of the water inside the solar panel
  private calculateWaterTemperature(
    waterTemperature: number,
    heatTransferRate: number,
    waterMass: number,
    waterSpecificHeat: number,
    timeStep: number
  ): number {
    const waterTemperatureChange =
      (heatTransferRate * timeStep) / (waterMass * waterSpecificHeat);
    const newWaterTemperature = waterTemperature + waterTemperatureChange;
    return newWaterTemperature;
  }

  // Create a method to calculate the temperature of the water inside the storage tank
  private calculateWaterTankTemperature(
    waterTankTemperature: number,
    heatTransferRate: number,
    waterTankMass: number,
    waterTankSpecificHeat: number,
    timeStep: number
  ): number {
    const waterTankTemperatureChange =
      (heatTransferRate * timeStep) / (waterTankMass * waterTankSpecificHeat);
    const newWaterTankTemperature =
      waterTankTemperature + waterTankTemperatureChange;
    return newWaterTankTemperature;
  }

  // Create a method to run the calculations over time
  public runCalculationsOverTime(data: SimulaEntryDataModel): void {
    let panelTemperature = data.tankTemperature;
    let waterTemperature = data.waterTemperature;
    let waterTankTemperature = data.tankTemperature;
    let tankTemperature = data.tankTemperature;
    for (let t = 0; t < data.totalTime; t += data.timeStep) {
      const heatTransferRate = this.calculateHeatTransferRate(
        data.panelArea,
        data.panelEfficiency,
        data.tankTemperature,
        data.ambientTemperature
      );

      panelTemperature = this.calculatePanelTemperature(
        panelTemperature,
        heatTransferRate,
        data.panelMass,
        data.panelSpecificHeat,
        data.timeStep
      );

      waterTemperature = this.calculateWaterTemperature(
        waterTemperature,
        heatTransferRate,
        data.waterMass,
        data.waterSpecificHeat,
        data.timeStep
      );

      waterTankTemperature = this.calculateWaterTankTemperature(
        waterTankTemperature,
        heatTransferRate,
        data.waterTankMass,
        data.waterTankSpecificHeat,
        data.timeStep
      );

      tankTemperature = this.calculateTankTemperature(
        data.tankTemperature,
        heatTransferRate,
        data.tankMass,
        data.tankSpecificHeat,
        data.timeStep
      );

      console.log('RESULTS ===== ');
      console.log(
        'heatTransferRate',
        heatTransferRate,
        'panelTemperature',
        panelTemperature,
        'waterTemperature',
        waterTemperature,
        'waterTankTemperature',
        waterTankTemperature,
        ' tankTemperature',
        tankTemperature
      );
    }
  }
}
