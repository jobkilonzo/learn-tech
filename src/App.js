import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Message from "./component/Message";
import Navbar from "./component/Navbar";
import Newslatter from "./component/Newletter";


function App() {
  return (
    <div className="">
      <Navbar />
      <Home/>
      <Message />
      <Newslatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
