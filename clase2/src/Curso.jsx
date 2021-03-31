import React from "react";

const imgUrl =
  "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature_1200x627.jpg?quality=89&w=1200";

export default function Curso() {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imgUrl} alt="cover" />
      </div>
      <div className="card-body">
        <h3>Title</h3>
        <p>Some text</p>
      </div>
    </div>
  );
}
