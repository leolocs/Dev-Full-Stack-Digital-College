import Nav from "../components/Nav";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function App(){
  return(
    //Highlander: Só pode haver um
    <>
    <Nav/>
    <Header/>
    <Main/>
      <h1>Conteúdo do Main</h1>
    <Footer/>
    </>
  )
};