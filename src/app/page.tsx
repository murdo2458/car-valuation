import { ModeToggle } from "@/components/DarkModeToggle";
import RegEdit from "@/components/RegEdit";

export default function Home() {
  return (
    <main>
      <div className="fixed py-2 end-2">
        <ModeToggle />
      </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <RegEdit />

        <div className="fixed left-1/2 top-1/2 transform -translate-y-1/2 max-w-sm">
          <div className="p-2 text-sm font-bold">
            <p>✅ Completely free results delivered instantly</p>
            <p>✅ Based on the latest trade and private sales data. Inline with results from We Buy Any Car, Motorway etc</p>
            <p>✅ With no string attached! We don't want your email and have nothing to sell you</p>
          </div>
        </div>
      </div>
    </main>
  );
}
