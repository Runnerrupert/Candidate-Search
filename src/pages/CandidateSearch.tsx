import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {

  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: "",
    name: "",
    login: "",
    email: "",
    company: "",
    location: "",
    bio: ""
  });

  const addToCandidateStorage = () => {
    let parsedCandidates = [];
    const storedCandidates = localStorage.getItem("myCandidates");
    if (typeof storedCandidates === "string") {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem("myCandidate", JSON.stringify(parsedCandidates));
  }

  const showNextCandidate = async () => {
    const data = await searchGithub();
    const userData = await searchGithubUser(data[Math.floor(Math.random() * 29)].login);
    console.log(userData);
    setCurrentCandidate(userData);
  }

  useEffect(() => {
    showNextCandidate();
  }, []);

  return (
    <>
      <CandidateCard 
        currentCandidate={currentCandidate}
        showNextCandidate={showNextCandidate}
        addToCandidateStorage={addToCandidateStorage}
      />
    </>
  );
};

export default CandidateSearch;
