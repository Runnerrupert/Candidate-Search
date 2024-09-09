import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';



const CandidateSearch = () => {
  return (
    <>
    <h1>CandidateSearch</h1>
    <div className="candidateCard">
      <img></img>
      <div className="candidate">
        <h2>UserName(Username)</h2>
        <p>Location:</p>
        <p>Email:</p>
        <p>Company:</p>
        <p>Bio:</p>
      </div>
    </div>
    <div className="btns">
      <button className="minus-btn">-</button>
      <button className="add-btn">+</button>
    </div>
    </>
  );
};

export default CandidateSearch;
