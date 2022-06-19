import { usePageContext } from "../context/PageContext";

const BtnGroup = ({ data, next, isFetching }) => {
  const { dispatch, initPage } = usePageContext();

  return (
    <div className="btn-gp">
      <button
        onClick={() => dispatch({ type: "PREV_PAGE", ...data })}
        disabled={initPage === 0 || isFetching ? true : false}
      >
        Prev
      </button>
      <button
        onClick={() => dispatch({ type: "NEXT_PAGE", ...data })}
        disabled={next === null || isFetching ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default BtnGroup;
