'use client';
import {useState} from 'react';

const ProgressSidebar = () => {
    const [active, setActive] = useState(1);
    const bgActive = 'bg-(--clr-blue-200) text-(--clr-blue-950)';

    const handleClick = (index: number) => {
        setActive(index);
    };

    return (
        <section className="sidebar flex lg:flex-col lg:gap-y-(--sp-400) lg:px-(--sp-400) py-(--sp-500) lg:w-[17.125rem] h-full">
            <div className="flex items-center gap-x-(--sp-200)">
                <button
                    type="button"
                    className={`${
                        active === 1
                            ? bgActive
                            : 'text-(--clr-white) border border-(--clr-white)'
                    } text-(length:--fs-14) font-bold leading-(--lh-120) tracking-[0.0625rem]  rounded-full w-[2.0625rem] h-[2.0625rem] cursor-pointer`}
                    onClick={() => handleClick(1)}>
                    1
                </button>
                <div className="flex flex-col uppercase">
                    <span className="text-(length:--fs-12) text-(--clr-blue-300) leading-(--lh-120)">
                        Step 1
                    </span>
                    <span className="text-(length:--fs-14) text-(--clr-white) font-bold leading-(--lh-120) tracking-[0.0625rem]">
                        Your info
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-x-(--sp-200)">
                <button
                    type="button"
                    className={`${
                        active === 2
                            ? bgActive
                            : 'text-(--clr-white) border border-(--clr-white)'
                    } text-(length:--fs-14) font-bold leading-(--lh-120) tracking-[0.0625rem]  rounded-full w-[2.0625rem] h-[2.0625rem] cursor-pointer`}
                    onClick={() => handleClick(2)}>
                    2
                </button>
                <div className="flex flex-col uppercase">
                    <span className="text-(length:--fs-12) text-(--clr-blue-300) leading-(--lh-120)">
                        Step 2
                    </span>
                    <span className="text-(length:--fs-14) text-(--clr-white) font-bold leading-(--lh-120) tracking-[0.0625rem]">
                        select plan
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-x-(--sp-200)">
                <button
                    type="button"
                    className={`${
                        active === 3
                            ? bgActive
                            : 'text-(--clr-white) border border-(--clr-white)'
                    } text-(length:--fs-14) font-bold leading-(--lh-120) tracking-[0.0625rem]  rounded-full w-[2.0625rem] h-[2.0625rem] cursor-pointer`}
                    onClick={() => handleClick(3)}>
                    3
                </button>
                <div className="flex flex-col uppercase">
                    <span className="text-(length:--fs-12) text-(--clr-blue-300) leading-(--lh-120)">
                        Step 3
                    </span>
                    <span className="text-(length:--fs-14) text-(--clr-white) font-bold leading-(--lh-120) tracking-[0.0625rem]">
                        Add-ons
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-x-(--sp-200)">
                <button
                    type="button"
                    className={`${
                        active === 4
                            ? bgActive
                            : 'text-(--clr-white) border border-(--clr-white)'
                    } text-(length:--fs-14) font-bold leading-(--lh-120) tracking-[0.0625rem]  rounded-full w-[2.0625rem] h-[2.0625rem] cursor-pointer`}
                    onClick={() => handleClick(4)}>
                    4
                </button>
                <div className="flex flex-col">
                    <div className="flex flex-col uppercase">
                        <span className="text-(length:--fs-12) text-(--clr-blue-300) leading-(--lh-120)">
                            Step 4
                        </span>
                        <span className="text-(length:--fs-14) text-(--clr-white) font-bold leading-(--lh-120) tracking-[0.0625rem]">
                            Summary
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgressSidebar;
