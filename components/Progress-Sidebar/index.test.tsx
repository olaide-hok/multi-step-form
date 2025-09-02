import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import ProgressSidebar from './index';

describe('ProgressSidebar', () => {
    it('renders all steps', () => {
        render(<ProgressSidebar />);
        expect(screen.getByText('Your info')).toBeInTheDocument();
        expect(screen.getByText('select plan')).toBeInTheDocument();
        expect(screen.getByText('Add-ons')).toBeInTheDocument();
        expect(screen.getByText('Summary')).toBeInTheDocument();
    });

    it('defaults to step 1 being active', () => {
        render(<ProgressSidebar />);
        const step1Button = screen.getByRole('button', {name: '1'});
        expect(step1Button.className).toContain('bg-(--clr-blue-200)');
    });

    it('changes active step when clicked', () => {
        render(<ProgressSidebar />);
        const step2Button = screen.getByRole('button', {name: '2'});

        // Initially step 1 is active
        expect(screen.getByRole('button', {name: '1'}).className).toContain(
            'bg-(--clr-blue-200)'
        );
        expect(step2Button.className).not.toContain('bg-(--clr-blue-200)');

        // Click step 2
        fireEvent.click(step2Button);

        // Step 2 should now be active
        expect(step2Button.className).toContain('bg-(--clr-blue-200)');
        expect(screen.getByRole('button', {name: '1'}).className).not.toContain(
            'bg-(--clr-blue-200)'
        );
    });

    it('can cycle through all steps', () => {
        render(<ProgressSidebar />);
        const stepButtons = ['1', '2', '3', '4'].map((label) =>
            screen.getByRole('button', {name: label})
        );

        stepButtons.forEach((btn) => {
            fireEvent.click(btn);
            expect(btn.className).toContain('bg-(--clr-blue-200)');
        });
    });
});
