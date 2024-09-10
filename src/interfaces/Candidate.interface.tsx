// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    avatar_url: string;
    name: string;
    login: string;
    company: string;
    location: string;
    email: string;
    bio: string;
}

export default Candidate;