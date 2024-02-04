'use client';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void; // reset to retry page
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
