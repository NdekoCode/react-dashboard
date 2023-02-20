import { createContext, memo, useContext, useState } from "react";

const UserStateInit = createContext();
export const UserStateContextProvider = memo(({ children }) => {
  const [isClicked, setIsClicked] = useState({
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  });

  // Va permettre de de desactiver de maniere independante les modales d'interactions utilisateurs.
  const toggleIsClicked = (state, value = null, dependant = true) => {
    console.log(isClicked);
    if (Object.keys(isClicked).includes(state)) {
      if (typeof value === "boolean") {
        setIsClicked((d) => ({ ...d, [state]: value }));
      } else {
        if (dependant) {
          setIsClicked((d) => ({
            ...{
              chat: false,
              cart: false,
              userProfile: false,
              notification: false,
            },
            [state]: !d[state],
          }));
        } else {
          setIsClicked((d) => ({
            ...d,
            [state]: !d[state],
          }));
        }
      }
    }
  };
  const initialState = { isClicked, toggleIsClicked };
  return (
    <UserStateInit.Provider value={initialState}>
      {children}
    </UserStateInit.Provider>
  );
});
export const UserStateContext = () => useContext(UserStateInit);
export default UserStateContext;
