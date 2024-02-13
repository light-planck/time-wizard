import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { useTimeIntervals } from "./features/time-interval/hooks/use-time-intervals";
import { TimeIntervalInput } from "./features/time-interval/time-interval-input";
import { useTotalTime } from "./hooks/use-total-time";

const App = () => {
  const {
    timeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
  } = useTimeIntervals();
  const { total, totalError, onAddIntervals } = useTotalTime(timeIntervals);

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
            <Button onClick={onAddIntervals}>計算</Button>
          </div>
          <div className="flex justify-center">
            {totalError ? (
              <div className="w-1/4">
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>エラー</AlertTitle>
                  <AlertDescription>時間を設定してください。</AlertDescription>
                </Alert>
              </div>
            ) : (
              <p>
                合計時間: {total.hours}時間 {total.minutes}分{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
