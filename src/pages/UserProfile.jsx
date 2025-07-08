import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-purple-700">👤 User Profile</h1>
      <p className="text-gray-700 mt-4">
        User ID: <span className="font-mono">{id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
