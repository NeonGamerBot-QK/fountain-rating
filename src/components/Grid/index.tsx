import { FountainData } from "../../constants";

export default function MainPage({ data }: { data: FountainData | null }) {
  return (
    <div className="hero min-h-screen" style={{ background: "var(--base)" }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Fountains</h1>
          {data && (
            <div className="grid grid-cols-2">
              {data.fountains.map((fountain) => (
                <div key={fountain.meta.name} className="card shadow-lg p-4">
                  <h2 className="text-2xl font-bold">{fountain.meta.name}</h2>
                  <p>{fountain.meta.description}</p>
                  <p>Avg Temp: {fountain.avg_temp}</p>
                  <p>Avg Pressure: {fountain.avg_pressure}</p>
                  <p>Avg Would Recommend: {fountain.avg_would_recommend}</p>
                  <p>Total Entries: {fountain.total_entries}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
