"use client";

import { useState } from "react";
import { MessageContainer } from "../components/message";

function fetchMessage(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, "Hello Hello Hello")
  );
}

export default function UsePage() {
  const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(
    null
  );
  const [show, setShow] = useState(false);
  function getMessage() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={getMessage}>Fetch message</button>;
  }
}
