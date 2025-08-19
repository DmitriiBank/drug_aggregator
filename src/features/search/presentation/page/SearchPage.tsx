import {
    BreadcrumpSection
} from "../components/breadcrump/BreadcrumpSection.tsx";
import {TitleText} from "../components/TitleText.tsx";

import {CardItem} from "../components/card_item/CardItem.tsx";
import {SearchInput} from "../components/form_controls/SearchInput.tsx";
import {SubmitButton} from "../components/form_controls/SubmitButton.tsx";
import {useEffect, useState} from "react";
import {repository} from "../../data/SearchDrugLocalRepository.ts";
import type {Drug} from "../../domain/Drug.ts";


export const SearchPage = () => {
    const [drugList, setDrugList] = useState<Drug[]>([])

    useEffect(() => {
        repository.searchByName("").then(
            data => {
                setDrugList(data)
            }
        )
    }, []);

    return (
        <main className={"max-w-4xl mx-auto py-10 px-4"}>
            <BreadcrumpSection />
            <section>
                <TitleText>Marketplace Products</TitleText>
                <div className={"flex rounded-md shadow-sm overflow-hidden bg-gray-50 border border-gray-200"}>
                    <SearchInput />
                    <SubmitButton />
                </div>
            </section>

            <section>
                {/*<h2 className={"py-4"}>*/}
                {/*    No items found*/}
                {/*</h2>*/}
                {
                    drugList.map(item => (
                        <CardItem price={item.price.toString()} title={item.drugName} description={item.description} />
                    ))
                }

            </section>
        </main>
    );
};

