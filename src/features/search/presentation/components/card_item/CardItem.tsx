import {PrimaryButton} from "../form_controls/PrimaryButton.tsx";


type CardItemProps = {
    title: string;
    description: string;
    price: string
}
export const CardItem = ({title, description, price }: CardItemProps) => {
    return (
        <div className="border border-blue-400 rounded-2xl p-8 bg-white shadow-sm p-4 m-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 ">
                <div>
                    <h2 className="text-blue-400 font-bold text-2xl uppercase mb-4"> {title}</h2>
                    <p className="text-green-600 text-lg">{description}</p>
                </div>

                <div className="text-center">
                    <div className="flex items-start justify-center text-4xl font-bold text-blue-400">
                        <span>{price}</span>
                        <span className="text-2xl text-blue-400 mt-1 ml-1">$</span>
                    </div>
                    <p className="text-blue-400 text-lg mb-2"> Per Month</p>
                    <PrimaryButton text={'Add to cart'} />
                </div>
            </div>
        </div>
    );
};

