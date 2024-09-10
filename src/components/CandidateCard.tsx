import Candidate from '../interfaces/Candidate.interface';


type CandidateCardProps = {
    currentCandidate: Candidate;
    addToCandidateStorage: (() => void) | null;
    showNextCandidate: (() => void) | null;
  }
 


const CandidateCard = ({
    currentCandidate,
    addToCandidateStorage,
    showNextCandidate,
  }: CandidateCardProps) => {
    return (
      <>
        <h1>Candidate Search</h1>
        <div className="candidateCard">
          <img src={`${currentCandidate.avatar_url}`}></img>
          <div className="candidate">
            <h2>{`${currentCandidate.name}(${currentCandidate.login})`}</h2>
            <p>Location: {currentCandidate.location}</p>
            <p>Email: {currentCandidate.email}</p>
            <p>Company: {currentCandidate.company}</p>
            <p>Bio: {currentCandidate.bio}</p>
          </div>
        </div>
        <div className="btns">
          <button onClick={() => showNextCandidate?.()} className="minus-btn">-</button>
          <button onClick={() => addToCandidateStorage?.()} className="add-btn">+</button>
        </div>
      </>
    );
  };


  export default CandidateCard;