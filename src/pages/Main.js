import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Passage from "../components/Passage";
import styled from "styled-components";

function Main() {
  const [chapter, setChapter] = useState(1);
  const [today, setToday] = useState(new Date());
  const [passages, setPassages] = useState("");
  const { focusRef } = useRef(null);

  useEffect(() => {
    fetch(`https://api.esv.org/v3/passage/html/?q=proverbs+${chapter}`, {
      headers: { Authorization: "089e1caeb4263d7f01b61d7f96859039a93fbba0" },
    }).then((response) => response.json().then((data) => setPassages(data)));
  // async await
}, [chapter]);

window.scrollTo({ top: 0, behavior: "smooth" });

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
    <Container ref={focusRef}>
      <Header />
      <Passage passages={passages} now={now} />
      <PageMove
        tomorrowHandler={tomorrowHandler}
        yesterdayHandler={yesterdayHandler}
      />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
