export enum TabType {
  STUDY = 'STUDY',
  RECLUSIVE = 'RECLUSIVE',
  RESTING = 'RESTING',
}

export interface ChartData {
  name: string;
  value: number;
}

export interface Challenge {
  id: number;
  text: string;
  completed: boolean;
}

export interface ActivityCard {
  id: number;
  title: string;
  description: string;
  category: string;
}