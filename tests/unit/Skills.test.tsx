import { render, screen, fireEvent } from '@testing-library/react';
import Skills from '../../src/components/Skills';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/i18n';

describe('Skills Component', () => {
  test('renders skills heading and categories', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>
    );

    expect(screen.getByText(/Technical Expertise/i)).toBeDefined();
    expect(screen.getAllByText(/Programming Languages/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Libraries & Frameworks/i).length).toBeGreaterThan(0);
  });

  test('filters categories when filter buttons are clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>
    );

    const languagesFilterBtn = screen.getByRole('button', { name: /Programming Languages/i });
    fireEvent.click(languagesFilterBtn);

    expect(screen.getAllByText(/Programming Languages/i).length).toBeGreaterThan(0);
    // queryByText fails here because "Build Tools" text is in the filter buttons, which are always shown.
    // Instead, let's verify that the "Libraries & Frameworks" card header is NOT present.
    // The filter buttons have the same text, so we check for exact category label as a heading if possible,
    // or we verify the absence of some skills data like "React" (if we mocked it), but queryByRole is better.
    // In our component, category headings are h3.
    expect(screen.queryByRole('heading', { name: 'Build Tools' })).toBeNull();
  });
});
