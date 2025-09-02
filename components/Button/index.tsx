import {cn} from '@/utils';

interface ButtonProps {
    name: string;
    className?: string;
    variant: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({
    name,
    className,
    variant,
    ...props
}: React.ComponentProps<'button'> & ButtonProps) => {
    const variants = {
        primary:
            'bg-(--clr-blue-950) text-(--clr-white) rounded-(--sp-100) py-(--sp-200) px-(--sp-300) hover:bg-(--clr-blue-700)',
        secondary:
            'bg-(--clr-purple-600) text-(--clr-white) py-(--sp-200) px-(--sp-300) rounded-(--sp-100) hover:bg-(--clr-purple-400)',
        tertiary:
            'text-(--clr-grey-500) p-[0.62rem] font-medium leading-(--lh-120) hover:text-(--clr-blue-950)',
    };

    return (
        <button
            className={cn(
                `${variants[variant]} ${className} outline-none cursor-pointer`
            )}
            {...props}>
            {name}
        </button>
    );
};

export default Button;
