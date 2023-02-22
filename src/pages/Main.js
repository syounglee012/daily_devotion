/* eslint-disable no-useless-concat */
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Passage from "../components/Passage";
import styled from "styled-components";

function Main() {
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
    <>
      {show ? (
        <Container ref={focusRef}>
          <Header />
          <div className="main-container">
            <Passage passages={passages} now={now} />
            <PageMove
              tomorrowHandler={tomorrowHandler}
              yesterdayHandler={yesterdayHandler}
            />
          </div>
        </Container>
      ) : null}
    </>
  );
}

export default Main;

const Container = styled.div`
  background: url("Bible1.jpeg") no-repeat center center/cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .main-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1300px) {
    background-position: 60% 70%;
}

  @media (max-width: 900px) {
    background-position: 66% 70%;
  }
`;
