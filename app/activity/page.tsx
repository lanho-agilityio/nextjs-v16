"use client";
import { Activity, useState } from "react";
import Sidebar from "../components/sidebar";

export default function ActivityPage() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <p>Old sidebar</p>
        {isShowingSidebar && <Sidebar />}
      </div>
      <div className="flex flex-row">
        <p>Sidebar with Activity</p>
        <Activity mode={isShowingSidebar ? "visible" : "hidden"}>
          <Sidebar />
        </Activity>
      </div>

      <main>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>Main content</h1>
      </main>
    </div>
  );
}
