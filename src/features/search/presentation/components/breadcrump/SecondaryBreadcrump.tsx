

type Props = {
    text: string
}

export const SecondaryBreadcrump = ({text}: Props) => {
    return (
        <span className={"text-sm text-second-text-color"}>
            {text}
        </span>
    );
};

