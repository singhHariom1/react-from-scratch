const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-sm">
      <img
        src={user.picture.large}
        alt="User"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">
        {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600">{user.location.country}</p>
      <p className="text-purple-600">{user.email}</p>
    </div>
  );
};

export default UserCard;

