import { DepContext } from "./DependencyContextProvider";

export function DepsProvider({children, ...services}) {
    return (
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}