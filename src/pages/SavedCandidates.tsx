import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidates = () => {

  const [candidateList, setCandidateList] = useState<Candidate[]>([]);


  const createTable = () => {
    if (candidateList === null) {
      return (
        <h1>You Have No Saved Candidates</h1>
      )
    } else {
      const populatedTable = candidateList.map((currentCandidate, index) => 
        <tr key={index}>
          <td><img src={currentCandidate.avatar_url}></img></td>
          <td>{`${currentCandidate.name} (${currentCandidate.login}`}</td>
          <td>{currentCandidate.location}</td>
          <td>
            <a>{currentCandidate.email}</a>
          </td>
          <td>{currentCandidate.company}</td>
          <td>{currentCandidate.bio}</td>
          <td className="btn">
            <button className="minus-btn">-</button>
          </td>
        </tr>
        )
        return(populatedTable);
    }
  } 

  const removeCandidate = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnCandidateList: boolean | null | undefined,
    name: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnCandidateList) {
      console.log(name);
      let parsedCandidates: Candidate[] = [];


      const storedCandidates = localStorage.getItem('myCandidates');
      if (typeof storedCandidates === 'string') {
        parsedCandidates = JSON.parse(storedCandidates);
      }
      parsedCandidates = parsedCandidates.filter(
        (candidate) => candidate.name !== name
      );
      localStorage.setItem('myCandidates', JSON.stringify(parsedCandidates));
    }
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