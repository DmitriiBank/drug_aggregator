

type Props = {
    text: string
}
export const PrimaryBreadcrump = ({text}: Props) => {
    return (
        <span className={"text-sm text-text-color font-semibold"}>
            {text}
        </span>
    );
};

