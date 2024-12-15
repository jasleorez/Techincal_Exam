import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import EventCard from "./Components/EventCard";
import EventForm from "./Components/EventForm";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
      <Routes>
        <Route path="/" element={<EventCard />} />
        <Route path="/event-form" element={<EventForm />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
