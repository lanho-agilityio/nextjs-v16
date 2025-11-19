"use client";

import { use, Suspense } from "react";

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({
  messagePromise,
}: {
  messagePromise: Promise<string> | null;
}) {
  if (!messagePromise) {
    return null;
  }

  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}
