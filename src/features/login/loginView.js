import {Component} from "react";
import { DepContext } from "../../context/DependencyContextProvider";
import {MainContext} from "../../context/MainContext";


class LoginView extends Component {
    //menggunakan contextType hanya bisa consume 1 context
    // static contextType = MainContext;

    onLogin = async (mainCtx, depCtx) => {
        console.log(mainCtx);
        console.log(depCtx);
        try {
            const response = await depCtx.services.authenticationService.authenticate('joko');
            mainCtx.setProfile({name: response})
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        // const {setProfile} = this.context;
        return (
            // <MainContext.Consumer>
            //     {value => {
            //         return (
            //             <>
            //                 <button onClick={() => value.setProfile({name: 'Joko'})}>Login</button>
            //             </>
            //         )
            //     }}
            // </MainContext.Consumer>
            // <>
            //     <button onClick={() => setProfile({name: 'Joko'})}>Login</button>
            // </>
            <>
                <DepContext.Consumer>
                    {deps => (
                        <MainContext.Consumer>
                            {vals => (
                                <button onClick={() => this.onLogin(vals, deps)}>Login</button>
                            )}
                        </MainContext.Consumer>
                    )}
                </DepContext.Consumer>
            </>
        )
    }
}

// Alternatif lain tanpa menggunakan static keyword
// LoginView.contextType = MainContext;

export default LoginView;
