/* eslint-disable no-useless-concat */
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  const [today, setToday] = useState(new Date());
  const [chapter, setChapter] = useState(today.getDate());
  const [passages, setPassages] = useState("");
  const focusRef = useRef(null);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        `https://api.esv.org/v3/passage/html/?q=proverbs+${chapter}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
    };

    fetchData()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPassages(data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [chapter]);

  const tomorrowHandler = () => {
    setToday(new Date(today.setDate(today.getDate() + 1)));
    if (chapter < 31) {
      setChapter(chapter + 1);
    } else if (chapter >= 31) {
      setChapter(1);
    }
  };

  const yesterdayHandler = () => {
    setToday(new Date(today.setDate(today.getDate() - 1)));
    if (chapter > 1) {
      setChapter(chapter - 1);
    } else if (chapter <= 1) {
      setChapter(31);
    }
  };

  let year = today.getFullYear();
  let date = today.getDate();
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = MONTH[today.getMonth()];
  let week = WEEKDAY[today.getDay()];
  let now = week + "," + " " + month + " " + date + "," + " " + year;

  return (
    <Container>
      {show ? (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  focusRef={focusRef}
                  passages={passages}
                  now={now}
                  tomorrowHandler={tomorrowHandler}
                  yesterdayHandler={yesterdayHandler}
                />
              }
            />
            <Route exact path="/search" element={<Search />}></Route>
          </Routes>
          <Footer />
        </>
      ) : null}
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-image: url("Bible1.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (max-width: 1500px) {
    background-position: 100%;
  }

  @media (max-width: 750px) {
    padding-top: 5rem;
  }
`;

