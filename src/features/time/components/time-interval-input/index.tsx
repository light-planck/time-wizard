import { Label } from "@radix-ui/react-label";
import type { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { TimeInterval } from "../../schemas";

interface Props {
  timeInterval: TimeInterval;
  onChangeTimeInterval: (id: string, newValue: TimeInterval) => void;
  onDeleteTimeInterval: (id: string) => void;
}

export const TimeIntervalInput: FC<Props> = ({
  timeInterval,
  onChangeTimeInterval,
  onDeleteTimeInterval,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-end p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div className="flex-1">
        <Label
          htmlFor={`start-time-${timeInterval.id}`}
          className="text-sm font-medium text-gray-700"
        >
          開始時刻
        </Label>
        <Input
          type="time"
          id={`start-time-${timeInterval.id}`}
          value={timeInterval.start}
          onChange={(event) =>
            onChangeTimeInterval(timeInterval.id, {
              ...timeInterval,
              start: event.target.value,
            })
          }
          className="mt-1"
        />
      </div>
      <div className="flex-1">
        <Label
          htmlFor={`end-time-${timeInterval.id}`}
          className="text-sm font-medium text-gray-700"
        >
          終了時刻
        </Label>
        <Input
          type="time"
          id={`end-time-${timeInterval.id}`}
          value={timeInterval.end}
          onChange={(event) =>
            onChangeTimeInterval(timeInterval.id, {
              ...timeInterval,
              end: event.target.value,
            })
          }
          className="mt-1"
        />
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => onDeleteTimeInterval(timeInterval.id)}
        className="px-3 w-full sm:w-auto"
      >
        削除
      </Button>
    </div>
  );
};
