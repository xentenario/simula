/**
  This file contains the data models for the Simula component.
*/

export interface SimulaResultDataModel {
  heatTransferRate: number;
  panelTemperature: number;
  waterTemperature: number;
  waterTankTemperature: number;
  tankTemperature: number;
}

export interface SimulaEntryDataModel {
  panelArea: number;
  panelMass: number;
  panelEfficiency: number;
  tankTemperature: number;
  tankMass: number;
  tankSpecificHeat: number;
  ambientTemperature: number;
  panelSpecificHeat: number;
  waterMass: number;
  waterTemperature: number;
  waterSpecificHeat: number;
  waterTankMass: number;
  waterTankTemperature:  number;
  waterTankSpecificHeat: number;
  timeStep: number;
  totalTime: number;
}
