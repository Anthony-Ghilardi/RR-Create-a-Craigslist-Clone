import React from "react";
import { postings }  from "./postings";

console.log('data here', postings.map)

function Gallery() {
    return (
        <>
            {postings.map(function (posting) {
                return (
                    <div className="gallery" key={posting}>
                        <div className="posting">
                            <p>{posting.title}</p>
                            <p>{posting.description}</p>
                            <p>{posting.price}</p>
                            <img src={posting.imageURL} alt={posting.title}></img>
                        </div>
                    </div>   
                )
            })}
        </>
         
    )
}

export default Gallery