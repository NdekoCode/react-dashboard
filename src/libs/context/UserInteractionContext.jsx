import { createContext, memo, useContext, useMemo, useState } from "react";

const UserStateInit = createContext();
export const UserStateContextProvider = memo(({ children }) => {
  const [userInteraction, setUserInteraction] = useState({
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  });
  const toggleUserInteraction = (state) => {
    if (Object.keys(userInteraction).includes(state)) {
      setUserInteraction((d) => ({ [state]: !d[state] }));
    }
  };
  const initialState = useMemo(
    () => ({
      userInteraction,
      toggleUserInteraction,
    }),
    []
  );
  return (
    <UserStateInit.Provider value={initialState}>
      {children}
    </UserStateInit.Provider>
  );
});
export const UserStateContext = () => useContext(UserStateInit);
export default UserStateContext;
