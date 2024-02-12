import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("#Footer", () => {
  it("displays copyright", () => {
    render(<Footer />);

    const copyright = `© ${new Date().getFullYear()} light planck.`;
    expect(screen.getByText(copyright)).toBeTruthy();
  });

  it('displays link to "GitHub"', () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/light-planck/add-time-intervals",
    );
  });
});
