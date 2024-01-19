import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import pic1 from "../src/assets/pic1.jpg";
import pic2 from "../src/assets/pic2.png";
import pic3 from "../src/assets/pic3.jpg";
import pic4 from "../src/assets/pic4.jpg";
import pic12 from "../src/assets/bg6.jpg";

const Index = () => {
  const [idValue , setIdValue] = useState("")
  const [prline, setprline] = useState(
    "We will help you implement a project of any complexity"
  );
  const [username, setusername] = useState("");
  const [para, setpara] = useState(
    "Selemen® — is a company for the construction and decoration of premises. We carry out projects on time"
  );
  const [title, setTitle] = useState("Selemen");
  const [exp, setexp] = useState("20+ years on the market");
  const [rightexp, setrightexp] = useState("We guarantee the quality");
  const [designTitle, setdt] = useState("");
  const [d1, setd1] = useState("Design 1");
  const [d2, setd2] = useState("Design 2");
  const [d3, setd3] = useState("Design 3");
  const [d4, setd4] = useState("Design 4");
  const [d5, setd5] = useState("Design 5");
  const [d6, setd6] = useState("Design 6");
  const [email, setemail] = useState("info@selemen");
  const [number, setnumber] = useState("+128148312084");
  const [pic1Source, setpic1Source] = useState([pic1, null]);
  const [pic2Source, setpic2Source] = useState([pic2, null]);
  const [pic3Source, setpic3Source] = useState([pic3, null]);
  const [pic4Source, setpic4Source] = useState([pic4, null]);

  const [pic5Source, setpic5Source] = useState([pic12, null]);
  const [pic6Source, setpic6Source] = useState([pic12, null]);
  const [pic7Source, setpic7Source] = useState([pic12, null]);
  const [pic8Source, setpic8Source] = useState([pic12, null]);
  const [pic9Source, setpic9Source] = useState([pic12, null]);
  const [pic10Source, setpic10Source] = useState([pic12, null]);
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    setIdValue(urlSearchParams.get('id'))
  }, []);
  function host() {    
    const formData = new FormData();
    formData.append("variant", "Designer-Portfolio-1")
    formData.append("userID",decodeURIComponent(idValue))
    formData.append("emailAddress", email);
    formData.append("navName", title);
    formData.append("file", pic1Source[1]); // Assuming pic1Source is an array [URL, File]
    formData.append("file", pic2Source[1]);
    formData.append("file", pic3Source[1]);
    formData.append("file", pic4Source[1]);
    formData.append("file", pic5Source[1]);
    formData.append("file", pic6Source[1]);
    formData.append("file", pic7Source[1]);
    formData.append("file", pic8Source[1]);
    formData.append("file", pic9Source[1]);
    formData.append("file", pic10Source[1]);
    formData.append("number", number);
    formData.append("exp", exp);
    formData.append("rightExp", rightexp);
    formData.append("para", para);
    formData.append("prLine", prline);
    formData.append("d1", d1);
    formData.append("d2", d2);
    formData.append("d3", d3);
    formData.append("d4", d4);
    formData.append("d5", d5);
    formData.append("d6", d6);

    fetch("https://portfoliifybackend-tp8u.onrender.com/upload", {
      method: "POST",
      body: formData,
    })
      
      .catch((error) => console.error("Error:", error));
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          para={para}
          setpara={setpara}
          title={title}
          setTitle={setTitle}
          exp={exp}
          setexp={setexp}
          rightexp={rightexp}
          setrightexp={setrightexp}
          pic1Source={pic1Source}
          pic2Source={pic2Source}
          pic3Source={pic3Source}
          pic4Source={pic4Source}
          setpic1Source={setpic1Source}
          setpic2Source={setpic2Source}
          setpic3Source={setpic3Source}
          setpic4Source={setpic4Source}
          number={number}
          host={host}
        />
      ),
    },
    {
      path: "/projects",
      element: (
        <Projects
          prline={prline}
          setprline={setprline}
          pic5Source={pic5Source}
          setpic5Source={setpic5Source}
          pic6Source={pic6Source}
          setpic6Source={setpic6Source}
          pic7Source={pic7Source}
          setpic7Source={setpic7Source}
          pic8Source={pic8Source}
          setpic8Source={setpic8Source}
          pic9Source={pic9Source}
          setpic9Source ={setpic9Source}
          pic10Source={pic10Source}
          setpic10Source ={setpic10Source}
          d1={d1}
          d2={d2}
          d3={d3}
          d4={d4}
          d5 ={d5}
          d6 = {d6}
          setd1={setd1}
          setd2={setd2}
          setd3={setd3}
          setd4={setd4}
          setd5={setd5}
          setd6={setd6}

          number={number}
          host={host}
        />
      ),
    },

    {
      path: "/contact",
      element: (
        <Contacts
          email={email}
          setemail={setemail}
          number={number}
          setnumber={setnumber}
          host={host}
        />
      ),
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
