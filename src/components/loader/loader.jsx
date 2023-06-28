import React, { useState, useEffect } from "react";
import "./loader.scss";
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInternetConnected, setIsInternetConnected] = useState(true);

  useEffect(() => {
    // Simulating page loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simulating internet connection check
    const checkInternetConnection = () => {
      setIsInternetConnected(window.navigator.onLine);
    };

    window.addEventListener("online", checkInternetConnection);
    window.addEventListener("offline", checkInternetConnection);

    return () => {
      window.removeEventListener("online", checkInternetConnection);
      window.removeEventListener("offline", checkInternetConnection);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader_container">
        <img
          src="https://i.pinimg.com/originals/6d/17/b9/6d17b970849f62353e7509daff49db3f.gif"
          alt=""
        />
        <div class="loading" data-loading-text="Loading..."></div>
      </div>
    );
  }

  if (!isInternetConnected) {
    return <div>No internet connection.</div>;
  }
};

export default Loader;
