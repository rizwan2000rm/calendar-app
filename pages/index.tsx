import Calendar from "@/calendar";
import Header from "@/shared/components/header";
import Sidebar from "@/shared/components/sidebar";

const Home = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="grow p-4">
        <Header />
        <Calendar />
      </main>
    </div>
  );
};
export default Home;
