import { render, screen } from "@testing-library/react";

import { TimeIntervalInput } from ".";

describe("#TimeIntervalInput", () => {
  const mockTimeInterval = {
    id: crypto.randomUUID(),
    start: "00:00",
    end: "00:00",
  } as const;

  it("ラベルを表示する", () => {
    render(
      <TimeIntervalInput
        timeInterval={mockTimeInterval}
        onChangeTimeInterval={() => {}}
        onDeleteTimeInterval={() => {}}
      />,
    );

    const startTimeLabel = screen.getByLabelText("開始");
    const endTimeLabel = screen.getByLabelText("終了");
    expect(startTimeLabel).toBeInTheDocument();
    expect(endTimeLabel).toBeInTheDocument();
  });
});
