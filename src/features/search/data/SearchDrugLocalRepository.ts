import type {SearchDrugRepository} from "../domain/SearchDrugRepository.ts";
import type {Drug} from "../domain/Drug.ts";
import type {SearchOptions} from "../domain/SearchOptions.ts";
import {
    mockDragSearchResult,
    mockDragSearchWithFilterResult
} from "./mock_data.ts";

const RECENT_SEARCH_KEY = 'recent_search'

export const repository: SearchDrugRepository = {
    addToRecentSearch(query: string): Array<string> {
        const serchArray = this.getRecentSearch();
        serchArray.push(query);
        localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(serchArray))
        return serchArray;
    },

    getRecentSearch(): Array<string> {
        const recentString = localStorage.getItem(RECENT_SEARCH_KEY) || '[]';
        return JSON.parse(recentString)

    },

    searchByName(query: string): Promise<Array<Drug>> {
        console.log("Search by name - ", query)
        return Promise.resolve(mockDragSearchResult);
    },

    searchWithFilter(query: string, options: SearchOptions): Promise<Array<Drug>> {
        console.log("Search by name and filter - ", query, JSON.stringify(options))
        return Promise.resolve(mockDragSearchWithFilterResult);
    }

}