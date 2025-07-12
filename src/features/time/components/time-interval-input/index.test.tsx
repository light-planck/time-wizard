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
        onChangeTimeInterval={() => undefined}
        onDeleteTimeInterval={() => undefined}
      />
    );

    const startTimeLabel = screen.getByLabelText("開始時刻");
    const endTimeLabel = screen.getByLabelText("終了時刻");
    expect(startTimeLabel).toBeInTheDocument();
    expect(endTimeLabel).toBeInTheDocument();
  });
});
