import { useContext } from "react";
import ScrollContext from "../context/ScrollContext";

const useScroll = () => useContext(ScrollContext);

export default useScroll