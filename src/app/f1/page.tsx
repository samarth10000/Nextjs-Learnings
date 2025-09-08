import Link from "next/link";

import React from "react";

const f1 = () => {
  return (
    <div>
      <h1>f1 page</h1>
      <div>
        <Link href={"/f1/f2"}>f2</Link>
      </div>
    </div>
  );
};

export default f1;
