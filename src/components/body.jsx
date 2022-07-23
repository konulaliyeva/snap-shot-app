import React from "react";

function Body({ photos }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col col-md-3 col-sm-6">
              <div  className="mb-3">
                <img src={photo.url} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Body;
