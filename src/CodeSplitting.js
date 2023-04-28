import React, { Suspense } from "react";

const Comments = React.lazy(() => import("./Comments"));
const Photos = React.lazy(() => import("./Photos"));

export function CodeSplitting() {
  const [tab, setTab] = React.useState("photos");

  return (
    <div>
      <Suspense fallback={<h2>Loading... </h2>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}
