"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Unauth = () => {
  const [unauthorizedVisit, setUnauthorizedVisit] = useState(false);

  const searchParams = useSearchParams();
  useEffect(() => {
    const search = searchParams.get("login");
    if (search === "unauthenticatedUser") {
      setUnauthorizedVisit(true);
    }
  }, [unauthorizedVisit]);
  return (
    <>
      {unauthorizedVisit && (
        <div className={`${styles.popUp} ${styles.slideIn}`}>
          Unauthorized Visitor
        </div>
      )}
    </>
  );
};

export default Unauth;
