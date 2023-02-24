import React from "react";
import styled from "styled-components";

const LoadingPage = () => {
  return (
    <LoadingPages>
      <div className="loading">
        <div className="loading-wrap">
          <div className="loading-title" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
        </div>
        <div className="loading-wrap">
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
        </div>

        <div className="loading-wrap">
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
        </div>
        <div className="loading-wrap">
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
        </div>
        <div className="loading-wrap">
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
          <div className="loading-lines" />
        </div>
      </div>
    </LoadingPages>
  );
};

export default LoadingPage;

const LoadingPages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  padding: 5rem;
  margin: 0;

  .loading {
    max-width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    width: 100%;
    .loading-wrap {
      width: 100%;
      margin-top: 3rem;
    }
    .loading-title {
      width: 50%;
      height: 2.5rem;
      margin-bottom: 3rem;
      border-radius: 0.125rem;
      opacity: 0.7;
      animation: skeleton-loading 1s linear infinite alternate;
    }
    .loading-lines {
      width: 90%;
      height: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.125rem;
      opacity: 0.7;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    .loading-lines:last-child {
      margin-bottom: 0;
      width: 60%;
    }
  }
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
