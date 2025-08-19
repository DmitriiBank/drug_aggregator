import {
    BreadcrumpSection
} from "../components/breadcrump/BreadcrumpSection.tsx";
import {TitleText} from "../components/TitleText.tsx";
import {SearchInput} from "../components/SearchInput.tsx";
import {SubmitButton} from "../components/SubmitButton.tsx";


export const SearchPage = () => {
    return (
        <main className={"max-w-4xl mx-auto py-10 px-4"}>
            <BreadcrumpSection />
            <section>
                    <TitleText>Marketplace Products</TitleText>
                <div className={"flex rounded-md shadow-sm overflow-hidden bg-gray-50 border border-gray-200"}>
                    <SearchInput />
                    <SubmitButton/>
                </div>
            </section>

            <section>
                <h2 className={"py-4"}>
                    No items found
                </h2>
            </section>
        </main>
    );
};

