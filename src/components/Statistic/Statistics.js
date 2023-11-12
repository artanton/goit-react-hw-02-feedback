export const Statistics = ({
  value: { good, neutral, bad },
  total,
  positiveFeadback,
}) => {
  return (
    <div>
      {total > 0 ? (
        <>
          <p>Good:{good} </p>
          <p>Neutral:{neutral} </p>
          <p>Bad:{bad} </p>
          <p>Total:{total} </p>
          <p>Positive Feadback:{positiveFeadback}% </p>
        </>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};
