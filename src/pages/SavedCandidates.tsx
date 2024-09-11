import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidates = () => {

  const [candidateList, setCandidateList] = useState<Candidate[]>([]);


  const createTable = () => {
    if (candidateList.length === 0) {
      return (
        <h1 className="center-align">You Have No Saved Candidates</h1>
      )
    } else {
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
            <button className="minus-btn" onClick={() => removeCandidate( currentCandidate.name)}>-</button>
          </td>
        </tr>
        )
        return(populatedTable);
    }
  } 

  const removeCandidate = (
    name: string | null
  ) => {
    let parsedCandidates: Candidate[] = [];

    const storedCandidates = localStorage.getItem('myCandidate');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates = parsedCandidates.filter(
        (candidate) => candidate.name !== name
    );
    localStorage.setItem('myCandidate', JSON.stringify(parsedCandidates));
    setCandidateList(parsedCandidates);
    createTable();
  }

  useEffect(() => {
    const parsedCandidates = JSON.parse(
      localStorage.getItem('myCandidate') as string
    );
    setCandidateList(parsedCandidates);
    if (parsedCandidates === null) {
      console.log("You have no saved candidates");
    }
  }, [])

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