import { useQuery } from "react-query";
import { fetchData } from "../context/PageAction";

import { Card, Loader, BtnGroup } from "../components";

import { usePageContext } from "../context/PageContext";

const Planets = () => {
  const { planetsPage } = usePageContext();

  const { data, status, isFetching } = useQuery(
    ["planets", planetsPage],
    () => fetchData(`https://swapi.dev/api/planets`, planetsPage, null),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );

  return (
    <div>
      <BtnGroup
        data={{ payload: "planets" }}
        next={data?.next}
        isFetching={isFetching}
      />
      <h2>Planets</h2>
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

export default Planets;
