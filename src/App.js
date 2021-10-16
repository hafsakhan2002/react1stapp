import Footerlist from "./component/Footer";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";

const { Component } = require("react");

class App extends Component{
  render(){
    return(
     <>
     <Navbar/>
     <Header/>
     <Section1/>
     <Section2/>
     <Footerlist/>
     </>
    )
  }
}
export default App;
