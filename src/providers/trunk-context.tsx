import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { SurvivalItem } from '../types';

export const TrunkContext =
  createContext<{
    trunk: SurvivalItem[];
    setTrunk: Dispatch<SetStateAction<SurvivalItem[]>>;
  }>(null);

const TrunkContextProvider = ({ children }) => {
  const [trunk, setTrunk] = useState<SurvivalItem[]>([]);

  return (
    <TrunkContext.Provider value={{ trunk, setTrunk }}>
      {children}
    </TrunkContext.Provider>
  );
};

export default TrunkContextProvider;
