import { useQuery } from "react-query";
import { fetchData } from "../context/PageAction";
import { Card, Loader, BtnGroup } from "../components";
import { usePageContext } from "../context/PageContext";

const People = () => {
  const { peoplePage } = usePageContext();

  const { data, status, isFetching } = useQuery(
    ["people", peoplePage],
    () => fetchData(`https://swapi.dev/api/people`, null, peoplePage),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );

  return (
    <div>
      <BtnGroup
        data={{ payload: "people" }}
        next={data?.next}
        isFetching={isFetching}
      />
      <h2>People</h2>

      {status === "loading" && <Loader />}

      {status === "error" && <h2>(error) Please Refresh</h2>}
      {status === "success" && (
        <div>
          {data.results.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
