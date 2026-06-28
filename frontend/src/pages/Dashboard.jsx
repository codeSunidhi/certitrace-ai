import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Boxes, FileCheck2, Truck } from "lucide-react";

const Dashboard = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/batches")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setBatches(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to connect to the backend.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-700">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  const stats = [
    {
      icon: Boxes,
      label: "Total Batches",
      value: batches.length,
      testId: "stat-total-batches",
    },
    {
      icon: FileCheck2,
      label: "Certified",
      value: batches.filter(
        (batch) => batch.certificate === "Certified"
      ).length,
      testId: "stat-certified",
    },
    {
      icon: Truck,
      label: "Dispatched",
      value: batches.filter(
        (batch) => batch.dispatch === "Dispatched"
      ).length,
      testId: "stat-dispatched",
    },
  ];

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
              This dashboard provides an overview of production and certification activities.
            </p>

            {error && (
              <div className="mt-6 rounded-lg bg-red-100 p-4 text-red-700">
                {error}
              </div>
            )}

            {/* Stats Cards */}
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

            {/* Batch Table */}
            <div className="mt-12 rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Production Batches
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-100">
                      <th className="px-4 py-3 text-left">Batch No.</th>
                      <th className="px-4 py-3 text-left">Plant</th>
                      <th className="px-4 py-3 text-left">Harvest Date</th>
                      <th className="px-4 py-3 text-left">Certificate</th>
                      <th className="px-4 py-3 text-left">Dispatch</th>
                    </tr>
                  </thead>

                  <tbody>
                    {batches.map((batch) => (
                      <tr
                        key={batch.id}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-4 py-4">{batch.batchNumber}</td>
                        <td className="px-4 py-4">{batch.plant}</td>
                        <td className="px-4 py-4">{batch.harvestDate}</td>
                        <td className="px-4 py-4">{batch.certificate}</td>
                        <td className="px-4 py-4">{batch.dispatch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;