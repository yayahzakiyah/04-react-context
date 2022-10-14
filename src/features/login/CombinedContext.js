import { CombinedContext } from "../../context/CombinedContext"
import { DepContext } from "../../context/DependencyContextProvider"
import { MainContext } from "../../context/MainContext"

const CombinedContextProvider = (props) => {
return (
        <DepContext.Consumer>
            {depContext => (
                <MainContext.Consumer>
                    {mainContext => (
                        <CombinedContext.Provider value={{depContext, mainContext}}>
                            {props.children}
                        </CombinedContext.Provider>
                    )}
                </MainContext.Consumer>
            )}
        </DepContext.Consumer>
    )
}

export default CombinedContextProvider