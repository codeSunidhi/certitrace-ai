import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Boxes, FileCheck2, Truck } from "lucide-react";

const stats = [
  {
    icon: Boxes,
    label: "Total Batches",
    value: "124",
    testId: "stat-total-batches",
  },
  {
    icon: FileCheck2,
    label: "Certificates",
    value: "87",
    testId: "stat-certificates",
  },
  {
    icon: Truck,
    label: "Dispatch Records",
    value: "56",
    testId: "stat-dispatch-records",
  },
];

const Dashboard = () => {
  return (
    <div
      data-testid="dashboard-page"
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-1 bg-slate-50">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              data-testid="dashboard-heading"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Dashboard
            </h1>

            <p
              data-testid="dashboard-paragraph"
              className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl"
            >
              This dashboard provides an overview of production and
              certification activities.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, label, value, testId }) => (
                <div
                  key={label}
                  data-testid={testId}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      {label}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <p className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                    {value}
                  </p>

                  <p className="mt-2 text-xs text-green-600 font-medium">
                    Updated just now
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;