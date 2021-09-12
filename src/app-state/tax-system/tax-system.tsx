import React, { createContext, FC, useContext, useState } from "react";

type TaxSystemContextType = {
  rankCount: number;
  setRankCount?: React.Dispatch<React.SetStateAction<number>>;
};

const TaxSystemContext = createContext<TaxSystemContextType>({ rankCount: 5 });

export const TaxSystemProvider: FC = ({ children }) => {
  const [rankCount, setRankCount] = useState(7);

  return (
    <TaxSystemContext.Provider value={{ rankCount, setRankCount }}>
      {children}
    </TaxSystemContext.Provider>
  );
};

export const useTaxSystem = () => useContext(TaxSystemContext);
