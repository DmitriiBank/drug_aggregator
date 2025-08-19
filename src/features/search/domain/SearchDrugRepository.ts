import type {Drug} from "./Drug.ts";
import type {SearchOptions} from "./SearchOptions.ts";

export type SearchDrugRepository = {
    searchByName: (query: string) => Promise<Array<Drug>>,
    searchWithFilter: (query:string, options: SearchOptions) =>  Promise<Array<Drug>>,
    addToRecentSearch: (query: string) =>  Array<string>,
    getRecentSearch: () =>  Array<string>
}