import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  // Getter/Setter for storing the candidates from local storage
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);

  // Function to Create and append each candidate to the tBody element
  const createTable = () => {
    // Sets a simple h1 to tell the user when there are no candidates they have saved
    if (candidateList.length === 0) {
      return ( 
      <h1 className="center-align">You Have No Saved Candidates</h1>
      )
    } else {
      // Create a new array of the data for each candidate in "candidateList"
      const populatedTable = candidateList.map((currentCandidate, index) => 
        <tr key={index} className="savedCandidatesContent">
          <td><img src={currentCandidate.avatar_url}></img></td>
          <td>{`${currentCandidate.name} (${currentCandidate.login})`}</td>
          <td>{currentCandidate.location || "Null"}</td>
          <td>
            <a>{currentCandidate.email || "Null"}</a>
          </td>
          <td>{currentCandidate.company || "Null"}</td>
          <td>{currentCandidate.bio || "Null"}</td>
          <td className="btn">
            <button className="minus-btn" onClick={() => removeCandidate( currentCandidate.login)}>-</button>
          </td>
        </tr>
      )
      return(populatedTable);
    }
  } 

  // Function to remove the selected candidate from local storage and re-render the page by calling the "createTable" function
  const removeCandidate = (
    login: string | null
  ) => {
    let parsedCandidates: Candidate[] = [];
    // Retrieve local storage data
    const storedCandidates = localStorage.getItem('myCandidate');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    // filters through all candidates and replaces the current data with everything except the "deleted" user
    parsedCandidates = parsedCandidates.filter(
        (candidate) => candidate.login !== login
    );
    // Sets new local storage data
    localStorage.setItem('myCandidate', JSON.stringify(parsedCandidates));
    setCandidateList(parsedCandidates);
    // used to re-render the table to the screen
    createTable();
  }

  // Upon rendering the page, get all candidates (or none) from local storage
  useEffect(() => {
    const parsedCandidates = JSON.parse(
      localStorage.getItem('myCandidate') as string
    );
    setCandidateList(parsedCandidates);
  }, [])

  // HTML for building the table, only the headers are shown at all times
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody id="table-body" >
          {createTable()}
        </tbody>
      </table>
    </>
  );
};


export default SavedCandidates;