import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { CrewMember } from '../models';

export const CrewContext =
  createContext<{
    crew: CrewMember[];
    setCrew: Dispatch<SetStateAction<CrewMember[]>>;
  }>(null);

const CrewContextProvider = (props) => {
  const [crew, setCrew] = useState<CrewMember[]>([]);

  return (
    <CrewContext.Provider value={{ crew: crew, setCrew: setCrew }}>
      {props.children}
    </CrewContext.Provider>
  );
};

export default CrewContextProvider;
