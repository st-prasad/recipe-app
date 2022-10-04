import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searched, setsearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    getsearched(params.search);
  }, [params.search]);

  const getsearched = (kk) => console.log(kk);

  return <div>Searched</div>;
}

export default Searched;
