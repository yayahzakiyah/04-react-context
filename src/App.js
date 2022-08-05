import { Component } from "react";
import { MainContext } from "./context/MainContext";
import LoginView from "./features/login/LoginView";
import ProfileView from "./features/profile/ProfileView";

function App() {
  // state = {
  //   profile : {}
  // }

  // setProfile = (profile) => {
  //   console.log(profile);
  //   this.setState({profile: profile})
  // }

  // render() {
  //   const {profile} = this.state
  //   return (
  //     <div>
  //       {/* store */}
  //       <MainContext.Provider value={{
  //         profile : profile,
  //         setProfile: this.setProfile 
  //       }}>
  //         <LoginView/>
  //         <ProfileView/>
  //       </MainContext.Provider>
  //     </div>
  //   )
  // }


  //dipisah
  return (
        <MainContext.Provider>
          <LoginView/>
          <ProfileView/>
        </MainContext.Provider>
  )
 }

 export default App