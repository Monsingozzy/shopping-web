import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export const News = () => {
  //   const newsData = [];
  const [State, Setstate] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c83edc2d5414e10acea0a647f8f01de"
      )
      .then((response) => Setstate(response.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(State);
  return (
    <div>
      <div>
        <h1>Indian News App</h1>
      </div>

      {State.map((news) => (
        <React.Fragment key={news.publishedAt}>
          <Card className="CradMain" style={{ width: "20rem" }}>
            <Card.Img variant="top" className="imgsize" src={news.urlToImage} />
            <Card.Body className="cardbody">
              <Card.Title className="cardtitle">{news.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted font-weight-bold">
                {news.description}
              </Card.Subtitle>
              {/* <Card.Text className="card-text">{news.content}</Card.Text> */}
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};
