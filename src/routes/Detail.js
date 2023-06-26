import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setLoading(false);
    setInfo(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={info.data.movie.background_image_original}></img>
          <h2>{info.data.movie.title}</h2>
          <p>{info.data.movie.description_full}</p>
          <p>
            link:<a href={info.data.movie.url}>here!</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
