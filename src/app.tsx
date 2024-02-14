import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { TimeIntervalInput } from "./features/time/components/time-interval-input";
import { useTimeIntervals } from "./features/time/hooks/use-time-intervals";
import { useTotalTime } from "./features/time/hooks/use-total-time";

const App = () => {
  const {
    timeIntervals,
    hasValidTimeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
    validateTimeIntervals,
  } = useTimeIntervals();
  const { totalTime, onCalculateTotalTime } = useTotalTime(timeIntervals);

  const handleCalculate = () => {
    const { success } = validateTimeIntervals();
    if (!success) return;

    onCalculateTotalTime();
  };

  return (
    <div className="flex flex-col min-h-screen m-0">
      <div className="flex-1">
        <Header />
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-5">
            {timeIntervals.map((interval) => (
              <TimeIntervalInput
                key={interval.id}
                timeInterval={interval}
                onChangeTimeInterval={onChangeTimeInterval}
                onDeleteTimeInterval={onDeleteTimeInterval}
              />
            ))}
          </div>
          <div className="flex flex-row justify-center gap-5">
            <Button onClick={onAddTimeInterval}>追加</Button>
            <Button variant="secondary" onClick={onResetTimeIntervals}>
              リセット
            </Button>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleCalculate}>計算</Button>
          </div>
          <div className="flex justify-center">
            {hasValidTimeIntervals ? (
              <p>
                合計時間: {totalTime.hours}時間 {totalTime.minutes}分{" "}
              </p>
            ) : (
              <div className="w-1/4">
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>エラー</AlertTitle>
                  <AlertDescription>時間を設定してください。</AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
