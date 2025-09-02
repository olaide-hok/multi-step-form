import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import Button from '@/components/Button';

describe('Button component', () => {
    it('renders with provided name', () => {
        render(<Button name="Click Me" variant="primary" />);
        expect(
            screen.getByRole('button', {name: 'Click Me'})
        ).toBeInTheDocument();
    });

    it('applies the correct primary variant styles', () => {
        render(<Button name="Primary" variant="primary" />);
        const button = screen.getByRole('button', {name: 'Primary'});
        expect(button.className).toContain('bg-(--clr-blue-950)');
    });

    it('applies the correct secondary variant styles', () => {
        render(<Button name="Secondary" variant="secondary" />);
        const button = screen.getByRole('button', {name: 'Secondary'});
        expect(button.className).toContain('bg-(--clr-purple-600)');
    });

    it('applies the correct tertiary variant styles', () => {
        render(<Button name="Tertiary" variant="tertiary" />);
        const button = screen.getByRole('button', {name: 'Tertiary'});
        expect(button.className).toContain('text-(--clr-grey-500)');
    });

    it('accepts custom className and merges with variant styles', () => {
        render(
            <Button name="Custom" variant="primary" className="custom-class" />
        );
        const button = screen.getByRole('button', {name: 'Custom'});
        expect(button.className).toContain('custom-class');
        expect(button.className).toContain('bg-(--clr-blue-950)');
    });

    it('handles onClick events', () => {
        const handleClick = vi.fn();
        render(
            <Button name="Click Me" variant="primary" onClick={handleClick} />
        );
        const button = screen.getByRole('button', {name: 'Click Me'});

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
