import React from "react";

const TeamChannelList = ({ children, error = false, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">Connection error</p>
      </div>
    ) : null;
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channell-list__header__title">
          {type === "team" ? "Channels " : "Direct Messeges"}
        </p>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
