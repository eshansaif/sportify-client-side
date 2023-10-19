import React, { useState } from "react";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  return (
    <div className="w-full h-full mx-auto">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-2xl lg:text-5xl font-semibold mb-3">
            All Users:
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{/* row 1 */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
