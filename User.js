import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return(
    <div>
    <center>
    <h2>User ID: {id}</h2>
    <p>Welcome User,{id}</p>
    </center>
    </div>
  );
}














