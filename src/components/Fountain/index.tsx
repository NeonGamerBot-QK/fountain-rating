import { FountainResponseFromApi } from "../../constants";

export default function Fountain({ data }: { data: FountainResponseFromApi }) {
  return (
    <div className="hero min-h-screen" style={{ background: "var(--base)" }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">React</h1>
          <p className="py-6">Default react template</p>
          <button className="btn btn-primary">src/App.tsx</button>
        </div>
      </div>
    </div>
  );
}
