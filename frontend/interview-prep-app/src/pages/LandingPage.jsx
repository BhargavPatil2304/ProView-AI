import React, { useState, useContext } from "react";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Modal from "../components/Modal";
import ProfileInfoCard from "../components/cards/ProfileInfoCard";
import { UserContext } from "../context/UserContext";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFCEF] to-[#FFF8E1] ">
        {/* Decorative blurred gradient circle */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-transparent blur-[150px] opacity-60"></div>

        <div className="container mx-auto px-4 pt-6 pb-[20px] relative z-10">
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">Interview Prep AI</div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-[#FF9324] text-sm font-semibold text-white px-7 py-2 rounded-full hover:bg-yellow-300 hover:text-black border border-white transition-colors"
                onClick={() => setOpenAuthModel(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center gap-2 text-[13px] text-amber-700 font-semibold bg-amber-100 px-3  rounded-full border border-amber-300 w-fit">
                AI Powered
              </div>

              <h1 className="text-5xl text-black font-bold leading-tight pb-6 pt-4">
                Ace Interviews with <br />
                <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] via-[#FFC100] to-[#FDE68A] animate-pulse">
                  <LuSparkles className="mr-2 " /> AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-800 mr-0 md:mr-20 mb-6 leading-relaxed">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery — your ultimate interview guide is here.
              </p>
              <button
                className="text-white bg-black font-semibold px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-black transition-colors"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- FEATURES SECTION ---------- */}
      <div className="relative w-full bg-gradient-to-b from-[#FFF8E1] to-white py-10">
        <div className="container mx-auto px-4">
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Features That Make You Shine
            </h2>

            <div className="flex flex-col items-center gap-12">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl border border-amber-100 transition"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl border border-amber-100 transition"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
