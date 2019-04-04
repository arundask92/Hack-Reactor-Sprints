import React, { Component } from "react";

const CurrentAttendeeList = props => {
  const expert = [];
  const beginner = [];
  const intermediate = [];
  props.attendees.filter(a => {
    if (a.skillLevel === "expert") {
      expert.push(a);
    } else if (a.skillLevel === "beginner") {
      beginner.push(a);
    } else {
      intermediate.push(a);
    }
  });

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginner.map(b => {
        return (
          <p>
            {b.firstName} {b.lastName}
          </p>
        );
      })}
      <h3>Intermediate</h3>
      {intermediate.map(i => {
        return (
          <p>
            {i.firstName} {i.lastName}
          </p>
        );
      })}
      <h3>Expert</h3>
      {expert.map(e => {
        return (
          <p>
            {e.firstName} {e.lastName}
          </p>
        );
      })}
    </div>
  );
};

export default CurrentAttendeeList;
