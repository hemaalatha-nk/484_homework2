import Nav from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { AddRequestForm } from "./FeedbackRequest";
import { RequestList } from "./FeedbackRequest";
import { useState } from "react";
import { FormData } from "../utils/types";

function FeedbackScreen() {
  // There maybe a need of defining state and passing them as props to components for enabling state sharing across components.
  const [reqCompleted, setStatus] = useState<Array<number>>([])
  const [data, setData] = useState<Array<FormData>>([{ name: "Crish", emailId: "crish4@uic.edu", ldescription: "Schema", sdescription: "The existing colo schema cam be made more attractive." },
  { name: "Hema", emailId: "hning4@uic.edu", ldescription: "UI", sdescription: "Submit button is not rendering properly." },
  { name: "Jhon", emailId: "jhon4@uic.edu", ldescription: "Features Request", sdescription: "Make it easy." }]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/list" element={<RequestList data={data} setData={setData} reqCompleted={reqCompleted} setStatus={setStatus} />} />

        <Route path="/add" element={<AddRequestForm data={data} setData={setData} reqCompleted={reqCompleted} setStatus={setStatus} />} />
      </Routes>
    </>
  );
}

export default FeedbackScreen;
