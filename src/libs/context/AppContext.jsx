import {
  createContext,
  memo,
  useContext,
  useLayoutEffect,
  useMemo,
} from "react";
import { useResize, useToggle } from "../hooks/basicsHooks";

const StateContextInit = createContext();
export const StateContextProvider = memo(({ children }) => {
  const [activeMenu, toggleMenu] = useToggle(true);
  const [screenSize, handleSize] = useResize();
  const initialState = useMemo(
    () => ({
      activeMenu,
      toggleMenu,
      screenSize,
      handleSize,
    }),
    [activeMenu, screenSize]
  );
  useLayoutEffect(() => {
    toggleMenu(true);
    if (screenSize <= 900) {
      toggleMenu(false);
    } else {
      toggleMenu(true);
    }
  }, [screenSize]);
  return (
    <StateContextInit.Provider value={initialState}>
      {children}
    </StateContextInit.Provider>
  );
});
export const StateContext = () => useContext(StateContextInit);
export default StateContext;
