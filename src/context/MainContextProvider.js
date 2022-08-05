import { Component } from "react";

export class MainContextProvider extends Component {
    state = {
        profile : {}
      }
    
      setProfile = (profile) => {
        console.log(profile);
        this.setState({profile: profile})
      }
    
      render() {
        const {profile} = this.state
        return (
          <div>
            {/* store */}
            <MainContext.Provider value={{
              profile : profile,
              setProfile: this.setProfile 
            }}>
              {this.props.children}
            </MainContext.Provider>
          </div>
        )
    }
}