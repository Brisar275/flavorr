import Banner from "./componentes/Banner";
import Grid from "./componentes/Grid";

export default function Home() {
  return (
    <div>
      <Banner />
      <h2 className="text-blue-900 font-[Aurora] text-4xl px-15 pt-15">Recetas</h2>
      <Grid />
    </div>
  );
}
