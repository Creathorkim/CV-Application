import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    position: "",
    responsibility: "",
    dateFrom: "",
    dateUntil: "",
  });

  const [education, setEducation] = useState({
    schoolName: "",
    title: "",
    date: "",
  });

  return (
    <>
      <h1 className="text-center mt-4">Cv Appliction</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
    </>
  );
}

export default App;
