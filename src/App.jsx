import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
const App = () => {
  return (<>
    <Navbar
      SearchBar={false} />
    <div className="pt-20 text-center mb-80">
      <h1 className="text-3xl font-bold">Welcome to BOORMAX</h1>
      <h2 className="text-xl font-medium">
        Hii my name is{" "}
        <span className="font-extrabold text-black">
          PRINCE KUMAR
        </span>
      </h2>

    </div>
    <Contact/>
    <Footer />

  </>
  )
}

export default App;