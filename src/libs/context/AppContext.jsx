import { createContext, memo, useContext, useMemo } from "react";
import { useToggle } from "../hooks/basicsHooks";

const StateContextInit = createContext();
export const StateContextProvider = memo(({ children }) => {
  const [chat, toggleChat] = useToggle(false);
  const [cart, toggleCart] = useToggle(false);
  const [userProfile, toggleUserProfile] = useToggle(false);
  const [notification, toggleUserNotification] = useToggle(false);
  const [activeMenu, toggleMenu] = useToggle(true);
  const initialState = useMemo(
    () => ({
      chat,
      toggleChat,
      cart,
      toggleCart,
      userProfile,
      toggleUserProfile,
      notification,
      toggleUserNotification,
      activeMenu,
      toggleMenu,
    }),
    [activeMenu]
  );
  return (
    <StateContextInit.Provider value={initialState}>
      {children}
    </StateContextInit.Provider>
  );
});
export const StateContext = () => useContext(StateContextInit);
export default StateContext;
