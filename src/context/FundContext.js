import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FundContext = createContext(null);

export const FundProvider = ({ children }) => {
  let token = document.location.href.split("=")[1];
  const [fund, setFund] = useState(0);
  const [userId, setUserId] = useState(0);
  const [depositFlag, setdepositFlag] = useState(false);

  const getUserInfo = async () => {
    let userInfo = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/limbo/api/game/get-userInfo`,
      {
        token,
      }
    );
    console.log(userInfo.data, "userInfo");
    if (userInfo.data.balance === 0) {
      setdepositFlag(true);
    }

    setUserId(userInfo.data.userId);
    setFund(userInfo.data.balance);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <FundContext.Provider
      value={{ fund, setFund, userId, setUserId, depositFlag }}
    >
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
