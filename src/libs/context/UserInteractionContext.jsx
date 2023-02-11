import { createContext, memo, useContext, useMemo } from "react";
import { useToggle } from "../hooks/basicsHooks";

const UserStateInit = createContext();
export const StateContextProvider = memo(({ children }) => {
  const [chat, toggleChat] = useToggle(false);
  const [cart, toggleCart] = useToggle(false);
  const [userProfile, toggleUserProfile] = useToggle(false);
  const [notification, toggleUserNotification] = useToggle(false);
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
    }),
    []
  );
  return (
    <UserStateInit.Provider value={initialState}>
      {children}
    </UserStateInit.Provider>
  );
});
export const StateContext = useContext(UserStateInit);
export default StateContext;
