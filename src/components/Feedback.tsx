import Nav from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { AddRequestForm } from "./FeedbackRequest";
import { RequestList } from "./FeedbackRequest";
import { useState } from "react";
import { FormData } from "../utils/types";
import initialData from "../initial-data.json";
// import {initial-data} from "../initial-data";

function FeedbackScreen() {
    // There maybe a need of defining state and passing them as props to components for enabling state sharing across components.
    const [reqCompleted, setStatus] = useState<Array<number>>([]);
    const [data, setData] = useState<Array<FormData>>(initialData);

    return (
        <>
            <Nav />
            <Routes>
                <Route
                    path="/list"
                    element={
                        <RequestList
                            data={data}
                            setData={setData}
                            reqCompleted={reqCompleted}
                            setStatus={setStatus}
                        />
                    }
                />

                <Route
                    path="/add"
                    element={
                        <AddRequestForm
                            data={data}
                            setData={setData}
                            reqCompleted={reqCompleted}
                            setStatus={setStatus}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default FeedbackScreen;
