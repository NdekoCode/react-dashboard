import {
  createContext,
  memo,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useResize, useToggle } from "../hooks/basicsHooks";

const StateContextInit = createContext();
export const StateContextProvider = memo(({ children }) => {
  const [activeMenu, toggleMenu] = useToggle(true);
  const [themeSettings, setThemeSettings] = useToggle(false);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };
  const setColor = (e) => {
    setCurrentColor(e.target.value);
    localStorage.setItem("color", e.target.value);
  };
  const toggleColor = (value) => {
    setCurrentColor(value);
  };
  const [screenSize, handleSize] = useResize();
  const handleCloseSideBar = useCallback(() => {
    if (activeMenu && screenSize <= 900) {
      toggleMenu(false);
    }
  });
  const initialState = useMemo(
    () => ({
      activeMenu,
      toggleMenu,
      screenSize,
      handleSize,
      handleCloseSideBar,
      currentColor,
      currentMode,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings,
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
