import { useLocalStorage } from "../hooks/useLocalStorage";

function Profile() {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

export default Profile;