import { createContext } from "react";
import { AskiaContextProps, DEFAULT_ASKIA_APP_CONTEXT_PROPS } from "../constants/constants";

export const AppContext = createContext<AskiaContextProps>(DEFAULT_ASKIA_APP_CONTEXT_PROPS);