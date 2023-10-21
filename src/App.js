import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Typingbox from './components/Typingbox';


function App(){
    return(
        <div className="App">
            <Header/>
            <Typingbox/>
            <Footer/>

        </div>
    );
}

export default App;