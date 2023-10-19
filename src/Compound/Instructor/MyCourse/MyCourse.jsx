import React from "react";

const MyCourse = () => {
  return (
    <div className="my-auto mx-auto">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-2xl lg:text-5xl font-semibold mb-3">
            My Courses:
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{/* row 1 */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourse;