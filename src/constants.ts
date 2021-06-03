import React from 'react';

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};

export type DrawingProps = {
  x: number;
  y: number;
  crashItem: { actualImportance: number; description: string };
};

export type CrewMember = {
  name: string;
  listOfPriorities?: SurvivalItem[];
};

export enum SurvivalItem {
  OXYGEN,
  WATER,
  MAP,
  FOOD,
  TXRX,
  ROPE,
  EMERGENCY_KIT,
  PARACHUTE,
  LIFEBOAT,
  BEACON,
  FIREARM,
  MILK,
  HEATER,
  COMPASS,
  MATCHES
}

export const CrashItems = [
  {
    actualImportance: 1,
    description: '2 tanques de 50kg de oxigênio'
  },
  {
    actualImportance: 2,
    description: '20l de água'
  },
  {
    actualImportance: 3,
    description: 'Mapa estelar da constelação lunar'
  },
  {
    actualImportance: 4,
    description: 'Alimento concentrado'
  },
  {
    actualImportance: 5,
    description: 'Tx-Rx portátil acionado por luz solar'
  },
  {
    actualImportance: 6,
    description: '20m de corda de náilon'
  },
  {
    actualImportance: 7,
    description: 'Kit de primeiros socorros'
  },
  {
    actualImportance: 8,
    description: 'Para-quedas de seda'
  },
  {
    actualImportance: 9,
    description: 'Bote salva-vidas'
  },
  {
    actualImportance: 10,
    description: 'Sinalizador luminoso para vácuo'
  },
  {
    actualImportance: 11,
    description: '2 pistolas calibre 45'
  },
  {
    actualImportance: 12,
    description: 'Caixa de leite em pó'
  },
  {
    actualImportance: 13,
    description: 'Aquecedor portátil'
  },
  {
    actualImportance: 14,
    description: 'Bússola'
  },
  {
    actualImportance: 15,
    description: 'Caixa de fósforos'
  }
];
