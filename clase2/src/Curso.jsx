import React from "react";
import PropTypes from "prop-types";

export default function Curso({ title, image, price, professor }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-professor">{professor}</p>
        <code className="card-price">{price}</code>
      </div>
    </div>
  );
}

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string,
};

Curso.defaultProps = {
  title: "Titulo",
  image:
    "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature_1200x627.jpg?quality=89&w=1200",
  price: 0,
  professor: "",
};
