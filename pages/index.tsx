import { useEffect, useState } from "react";
import Calendar from "@/calendar";
import Header from "@/shared/components/header";
import Sidebar from "@/shared/components/sidebar";
import { getPreviousMonday } from "@/shared/utils";
import { addEventsToDB } from "@/db/utils";

const Home = () => {
  const [weekStart, setWeekStart] = useState(getPreviousMonday(Date.now()));

  useEffect(() => {
    addEventsToDB();
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="grow p-4 overflow-hidden">
        <Header weekStart={weekStart} setWeekStart={setWeekStart} />
        <Calendar weekStart={weekStart} />
      </main>
    </div>
  );
};
export default Home;
