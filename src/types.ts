import React from 'react';

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};

export type SurvivalItem = {
  actualImportance: number;
  description: string;
};

export type DrawingProps = {
  x: number;
  y: number;
  crashItem: SurvivalItem;
};

export type CrewMember = {
  name: string;
  listOfPriorities?: SurvivalItem[];
};
