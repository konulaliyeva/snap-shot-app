import React from "react";

function Body({ photos }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col col-md-3 col-sm-6">
              <div  className="mx-2 mb-4">
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

// <div className="body_wrapper">
//         <div className="photo_container">
//           <ul>
//             {photos.map((photo) => (
//               <li key={photo.id} className="mb-4">
//                 <img src={photo.url} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
