export type LayerType = "Interactable" | "Non-Interactable" | "Passable" | "Non-Passable";

export interface Layer {
  orderInLayer: number;
  name: string;
  type: LayerType[];
  tileMap: number[][];
}

export interface MapObject {
  id: number;
  imageUrl: string;
}

export interface GameMap {
  layers: Layer[];
  objects: MapObject[];
}

export interface ScenarioData {
  createdDate: string;
  scenarioId: number;
  scenarioName: string;
  map: GameMap;
}
