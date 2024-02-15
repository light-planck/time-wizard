import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("#Header", () => {
  it("タイトルを表示する", () => {
    render(<Header />);

    const title = screen.getByRole("heading", { name: "Time Wizard" });
    expect(title).toBeInTheDocument();
  });

  it("説明を表示する", () => {
    render(<Header />);

    const description =
      screen.getByText("時間の区間の合計時間を計算できます。");
    expect(description).toBeInTheDocument();
  });
});
