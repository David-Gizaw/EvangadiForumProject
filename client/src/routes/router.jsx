import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Home from "../pages/Home/Home.jsx";
import HowItWorks from "../pages/Howitworks/HowItWorks.jsx";
import Terms from "../components/Footer/Terms.jsx";
import Privacy from "../components/Footer/Privacy.jsx";
import PrivacyPolicy from "../pages/privacy-policy/Privacy-police.jsx";
import QuestionAndAnswer from "../pages/QuestionAndAnswer/QuestionAndAnswer.jsx";
import Answer from "../pages/Answer/Answer.jsx";
import AuthLayout from "../pages/AuthLayout/AuthLayout.jsx";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import AskQuestion from "../pages/Question/AskQuestion/AskQuestion.jsx";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:questionId" element={<QuestionAndAnswer />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/forgetPass" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
