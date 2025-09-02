import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * A utility function that combines `clsx` and `twMerge` to create a class name
 * string that can be safely used in a `className` prop. The main advantage of
 * this function is that it correctly handles tailwind classes that are prefixed
 * with a dash, which `clsx` normally would not.
 *
 * @param inputs - The class names to combine.
 * @returns A single class name string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
