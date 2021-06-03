import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { CrewMember } from '../constants';

export const CrewContext =
  createContext<{
    crew: CrewMember[];
    setCrew: Dispatch<SetStateAction<CrewMember[]>>;
  }>(null);

const CrewContextProvider = ({ children }) => {
  const [crew, setCrew] = useState<CrewMember[]>([]);

  return (
    <CrewContext.Provider value={{ crew: crew, setCrew: setCrew }}>
      {children}
    </CrewContext.Provider>
  );
};

export default CrewContextProvider;
