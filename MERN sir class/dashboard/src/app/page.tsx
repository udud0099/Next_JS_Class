import TotalOverview from "./components/TotalOverview";

export default function Home() {
  return (
    <>
      <div className="w-[80%] bg-gray-100">
        <h1>dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div>
              <TotalOverview />
            </div>
          </div>
          <div className="flex-1">test</div>
        </div>
      </div>
    </>
  );
}
