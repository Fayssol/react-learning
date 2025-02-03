export type AskiaContextProps = {
    activeNavigation : string;
    setActiveNavigation : (value:string) => void;
    navigationOpen : boolean;
    setNavigationOpen : (value:boolean) => void;
    user : string;
    toolNavigation : boolean;
    setToolNavigation : (value:boolean) => void;
}

export const DEFAULT_ASKIA_APP_CONTEXT_PROPS : AskiaContextProps = {
    activeNavigation : 'home',
    setActiveNavigation : () => {},
    navigationOpen : true,
    setNavigationOpen : () => {},
    user : 'testUser',
    toolNavigation : false,
    setToolNavigation : () => {},

}