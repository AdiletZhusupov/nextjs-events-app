import React from "react";
import {useRouter} from 'next/router'
const SingleEvent = () => {
    const router = useRouter()
  return <div>its event with id {router.query.id}</div>;
};

export default SingleEvent;
