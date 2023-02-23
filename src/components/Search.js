import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import Audio from "./Audio";
import PageMove from "./PageMove";
import Header from "./Header";

const Search = () => {
  const [bookSearch, setBookSearch] = useState("Genesis");
  const [chapterSearch, setChapterSearch] = useState([]);
  const [chapterResult, setChapterResult] = useState(1);
  const [searchResults, setSearchResults] = useState("");
  const [localResults, setLocalResults] = useState([]);
  const passages = searchResults;

  useLayoutEffect(() => {
    const getData = () => {
      fetch("./bible.json")
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          setLocalResults(
            data.map((passage) => {
              return passage;
            })
          );
        });
    };
    getData();
  }, []);

  const bookSearchHandler = (e) => {
    setBookSearch(e.target.value);
    setChapterResult(1);
    setChapterSearch([]);
  };

  const chapterSearchHandler = (e) => {
    if (e.target.value === "all") return;
    setChapterResult(e.target.value);
  };

  useEffect(
    (e) => {
      let limitNum = [];
      let result = [];
      result = localResults.filter((term) =>
        term?.[0]?.book.toLowerCase().includes(bookSearch.toLowerCase())
      );
      for (let i = 1; i <= result?.[0]?.[0]?.chapter; i++) {
        limitNum.push(i);
      }
      setChapterSearch(limitNum);

      const fetchData = async () => {
        return await fetch(
          `https://api.esv.org/v3/passage/html/?q=${bookSearch}+${chapterResult}`,
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
          setSearchResults(data);
          window.scrollTo({ top: 0, behavior: "smooth" });
        })

        .catch((err) => {
          console.log(err);
        });
    },
    [bookSearch, chapterResult, localResults]
  );

  const prev = () => {
    if (chapterResult > 1) {
      setChapterResult((prev) => prev - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    if (chapterResult < chapterSearch.length) {
      setChapterResult((prev) => prev + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Header />
      <SearchEngine>
        <Wrap>
          <select onChange={bookSearchHandler}>
            {localResults.map((passage) => {
              return (
                <option value={passage?.[0]?.book} key={passage?.[0]?.book}>
                  {passage?.[0]?.book}
                </option>
              );
            })}
          </select>
          <select onChange={chapterSearchHandler}>
            <option value="all">CHAPTER</option>
            {chapterSearch.map((chapter, idx) => {
              return (
                <option value={chapter} key={chapter * idx}>
                  {chapter}
                </option>
              );
            })}
          </select>
        </Wrap>

        <Passage>
          <Context>
            <MiddleContainer>
              <ContextTitle>{passages?.canonical}</ContextTitle>
              <Audio passages={passages} />
            </MiddleContainer>

            <TodaysMessage
              dangerouslySetInnerHTML={{ __html: passages?.passages?.[0] }}
            ></TodaysMessage>
          </Context>
        </Passage>
        <PageMove tomorrowHandler={next} yesterdayHandler={prev} />
      </SearchEngine>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  background: url("Bible1.jpeg") no-repeat center center/cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  color: white;

  @media screen and (max-width: 700px) {
  }

  @media (max-width: 1510px) {
    background-position: 60% 70%;
  }

  @media (max-width: 980px) {
    background-position: 66% 70%;
  }
`;

const SearchEngine = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 6rem;
  padding-top: 5rem;
  .search-container {
    width: 100%;
    max-width: 350px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }

  @media screen and (max-width: 700px) {
    padding: 5rem 2rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 2rem;
`;

const Passage = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Context = styled.div`
  width: 100%;
  padding: 2rem;
`;
const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
`;
const ContextTitle = styled.span`
  color: white;
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  display: inline;
  @media screen and (max-width: 700px) {
    font-size: 26px;
  }
`;

const TodaysMessage = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5rem;
  & a {
    color: #0096ff;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }

  & h2 {
    font-size: 0;
  }
`;
