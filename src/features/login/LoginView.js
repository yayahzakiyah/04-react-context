import { Component } from "react";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component{
    //contextType disini bertujuan untuk membaca contxt saat ini
    
    //cara pertama
    // static contextType = MainContext //ngga bisa diganti2
    render(){
        // const {setProfile} = this.context
        return (
            // <div>
            //     <button onClick={() => setProfile({name: 'yayah'})}>Login</button>
            // </div>

            //cara kedua
            <MainContext.Consumer>
                {ctx => {
                    return (
                        <div>
                        <button onClick={() => ctx.setProfile({name: 'yayah'})}>Login</button>
                        </div>
                    )
                }}
            </MainContext.Consumer>
        )
    }
}
//Alternatif lain tanpa menggunakan static
//LoginView.contextType = MainContext;

export default LoginView

//Context -> untuk data yang tidak berubah2, karena component akan dirender ulang