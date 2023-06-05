import React, { useState } from 'react';
import { Client, Databases, ID } from "appwrite";
import { databases } from "../appwrite/appwriteConfig";


function Bookmark() {
    const [bookmark, setBookmark] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const promise = databases.createDocument(
            '647a149e8b85d32173ad',
            '647a14b7a61b67e2c807',
            ID.unique(),
            {
                bookmark
            }
        );
        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
       //window.location.reload()
       e.target.reset(); 
    }
  return (
    <div className="">
      <form
        action=""
    onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder=""
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setBookmark(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add To Bookmark
        </button>
      </form>
    </div>
    //this button is to change to the add button
  )
}

export default Bookmark