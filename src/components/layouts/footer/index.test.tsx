import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("#Footer", () => {
  it("コピーライトを表示する", () => {
    render(<Footer />);

    const copyright = `© ${new Date().getFullYear()} light planck.`;
    expect(screen.getByText(copyright)).toBeTruthy();
  });

  it("GitHubのリンクを表示する", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/light-planck/add-time-intervals"
    );
  });
});
