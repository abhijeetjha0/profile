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
    expect(screen.getByText(/Programming Languages/i)).toBeDefined();
    expect(screen.getByText(/Libraries & Frameworks/i)).toBeDefined();
  });

  test('filters categories when filter buttons are clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>
    );

    const languagesFilterBtn = screen.getByRole('button', { name: /Programming Languages/i });
    fireEvent.click(languagesFilterBtn);

    expect(screen.getByText(/Programming Languages/i)).toBeDefined();
    expect(screen.queryByText(/Build Tools/i)).toBeNull();
  });
});
