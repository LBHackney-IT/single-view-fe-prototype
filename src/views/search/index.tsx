import { useQuery } from "../../hooks";
import { SearchByResident } from "./searchByResident";
import { SearchByPhone } from "./searchByPhone";

export const SearchView = (): JSX.Element => {
    return (
      <>
        <h1 className="lbh-heading-h1">Welcome to Single View</h1>

        {(useQuery().get("context") == "person")
                ? <SearchByResident />
                : <SearchByPhone />}
      </>
    );
};
