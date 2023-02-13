import { createContext, memo, useContext, useMemo, useState } from "react";

const UserStateInit = createContext();
export const UserStateContextProvider = memo(({ children }) => {
  const [isClicked, setIsClicked] = useState({
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  });
  const toggleIsClicked = (state) => {
    if (Object.keys(isClicked).includes(state)) {
      setIsClicked((d) => ({ ...d, [state]: !d[state] }));
      console.log(isClicked);
    }
  };
  const initialState = useMemo(
    () => ({ isClicked, toggleIsClicked }),
    [isClicked]
  );
  return (
    <UserStateInit.Provider value={initialState}>
      {children}
    </UserStateInit.Provider>
  );
});
export const UserStateContext = () => useContext(UserStateInit);
export default UserStateContext;
