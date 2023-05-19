import { createContext, useState } from "react";

const FundContext = createContext(null);

export const FundProvider = ({ children }) => {
  const [fund, setFund] = useState(10000);
  return (
    <FundContext.Provider value={{ fund, setFund }}>
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
