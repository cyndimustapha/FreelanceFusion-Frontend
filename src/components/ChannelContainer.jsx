import React from "react";
import { Channel, useChatContext } from "stream-chat-react";

import ChannelInner from "./ChannelInner";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";
import TeamMessage from "./TeamMessage";

const ChannelContainer = (
  isCreating = { isCreating },
  setIsCreating = { setIsCreating },
  isEditing = { isEditing },
  createType = { createType },
  setIsEditing = { setIsEditing }
) => {
  const { Channel } = useChatContext();
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">Begin chat history</p>
      <p className="channel-empty__second">Send messages</p>
    </div>
  );

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndictor={EmptyState}
        Message={(messegeProps, i) => <TeamMessage key={i} {...messegeProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
