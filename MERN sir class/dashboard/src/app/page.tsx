import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import Chart3 from "./components/Chart3";
import Chart4 from "./components/Chart4";
import TotalOverview from "./components/TotalOverview";

export default function Home() {
  return (
    <>
      {/* <div className="w-[80%]  ">
        <h1>dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div>
              <TotalOverview />
            </div>
          </div>
          <div className="flex-1">test</div>
        </div>
      </div>*/}
      <div className="w-[400px] h-[400px]">
        {/* <Chart1 /> */}
        {/* <Chart2 /> */}
        {/* <Chart3 /> */}
        <Chart4 />
      </div>
    </>
  );
}
