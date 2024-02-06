import { Logo } from "@/components/icons/logo";

export const Header = () => {
  return (
    <div>
      <div className="flex">
        <Logo width={100} height={100} />
        <div className="p-5">
          <h1 className="text-2xl">Add Time Intervals</h1>
          <p>時間の区間の総和を計算できます。</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
