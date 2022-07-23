import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";


function App() {
  const [photos, setPhotos] = useState([]);
  const [text, setText] = useState("All Images");
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page="+page+"&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos.photo.map((photo) => {
          return {
            id: photo.id,
            text: photo.title,

            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
          };
        });
        setPhotos(photos);
      });
  }, [page]);

  function handleFilter(tag) {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags= " +
        tag +
        "&per_page="+20+"&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((data) => {
  
        const photos = data.photos.photo.map((photo) => {
          return {
            id: photo.id,
            text: photo.title,
            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
          };
        });

        setPhotos(photos);
        setText(tag + " Images");
      });

  }
  const handlePageChange =(pageNumber) => {
    setPage(pageNumber);
 }
  return (
    <>
      <div className="container">
        <Header handleFilter={handleFilter} />
        <h2 className="mb-5">{text}</h2>
        <Body photos={photos} />
      </div>
      <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={150}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
    </>
  );
}

export default App;
