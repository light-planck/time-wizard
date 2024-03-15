import { Logo } from "@/components/icons/logo";

export const Header = () => {
  return (
    <div>
      <header className="flex">
        <Logo width={100} height={100} />
        <div className="p-5">
          <h1 className="text-2xl">Time Wizard</h1>
          <p>時間の区間の合計時間を計算できます。</p>
        </div>
      </header>
      <hr />
    </div>
  );
};
