import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import { Boxes, FileCheck2, Truck } from "lucide-react";

const Dashboard = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [newBatch, setNewBatch] = useState({
    batchNumber: "",
    plant: "",
    harvestDate: "",
    certificate: "Pending",
    dispatch: "Pending",
  });

  // Fetch batches
  const fetchBatches = async () => {
    try {
      const response = await api.get("/batches");
      setBatches(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  // Create new batch
  const handleSave = async () => {
  if (
    !newBatch.batchNumber ||
    !newBatch.plant ||
    !newBatch.harvestDate
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    if (editingId) {
      // Update existing batch
      await api.put(`/batches/${editingId}`, newBatch);

      alert("Batch Updated Successfully!");
    } else {
      // Create new batch
      await api.post("/batches", newBatch);

      alert("Batch Added Successfully!");
    }

    setNewBatch({
      batchNumber: "",
      plant: "",
      harvestDate: "",
      certificate: "Pending",
      dispatch: "Pending",
    });

    setEditingId(null);

    fetchBatches();

  } catch (err) {
    console.error(err);
    alert("Operation Failed.");
  }
};

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this batch?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/batches/${id}`);

    fetchBatches();

    alert("Batch Deleted Successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to delete batch.");
  }
};

const handleEdit = (batch) => {
  setEditingId(batch._id);

  setNewBatch({
    batchNumber: batch.batchNumber,
    plant: batch.plant,
    harvestDate: batch.harvestDate,
    certificate: batch.certificate,
    dispatch: batch.dispatch,
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
      testId: "stat-certificates",
    },
    {
      icon: Truck,
      label: "Dispatched",
      value: batches.filter(
        (batch) =>
          batch.dispatch === "Dispatched" ||
          batch.dispatch === "Delivered"
      ).length,
      testId: "stat-dispatch-records",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-700">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div
      data-testid="dashboard-page"
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-1 bg-slate-50">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Dashboard
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              This dashboard provides an overview of production and certification activities.
            </p>

            {error && (
              <div className="mt-6 rounded-lg bg-red-100 p-4 text-red-700">
                {error}
              </div>
            )}

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map(({ icon: Icon, label, value, testId }) => (
                <div
                  key={label}
                  data-testid={testId}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-500">
                      {label}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <p className="mt-4 text-4xl font-bold text-slate-900">
                    {value}
                  </p>

                  <p className="mt-2 text-xs text-green-600">
                    Live from MongoDB
                  </p>
                </div>
              ))}
            </div>

            {/* Add Batch */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                Add New Batch
              </h2>

              <div className="grid gap-4 md:grid-cols-3">

                <input
                  className="border rounded-lg p-3"
                  placeholder="Batch Number"
                  value={newBatch.batchNumber}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      batchNumber: e.target.value,
                    })
                  }
                />

                <input
                  className="border rounded-lg p-3"
                  placeholder="Plant"
                  value={newBatch.plant}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      plant: e.target.value,
                    })
                  }
                />

                <input
                  type="date"
                  className="border rounded-lg p-3"
                  value={newBatch.harvestDate}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      harvestDate: e.target.value,
                    })
                  }
                />

                <select
                  className="border rounded-lg p-3"
                  value={newBatch.certificate}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      certificate: e.target.value,
                    })
                  }
                >
                  <option>Certified</option>
                  <option>Pending</option>
                </select>

                <select
                  className="border rounded-lg p-3"
                  value={newBatch.dispatch}
                  onChange={(e) =>
                    setNewBatch({
                      ...newBatch,
                      dispatch: e.target.value,
                    })
                  }
                >
                  <option>Pending</option>
                  <option>Dispatched</option>
                  <option>Delivered</option>
                </select>

                <button
                  onClick={handleSave}
                  className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
                >
                  {editingId ? "Update Batch" : "Add Batch"}
                </button>
              </div>
            </div>

            {/* Batch Table */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Production Batches
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="px-4 py-3 text-left">Batch No.</th>
                      <th className="px-4 py-3 text-left">Plant</th>
                      <th className="px-4 py-3 text-left">Harvest Date</th>
                      <th className="px-4 py-3 text-left">Certificate</th>
                      <th className="px-4 py-3 text-left">Dispatch</th>
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {batches.length > 0 ? (
                      batches.map((batch) => (
                        <tr
                          key={batch._id}
                          className="border-b hover:bg-slate-50"
                        >
                          <td className="px-4 py-4">{batch.batchNumber}</td>
                          <td className="px-4 py-4">{batch.plant}</td>
                          <td className="px-4 py-4">{batch.harvestDate}</td>
                          <td className="px-4 py-4">{batch.certificate}</td>
                          <td className="px-4 py-4">{batch.dispatch}</td>
                          <td className="px-4 py-4">
  <div className="flex justify-center gap-2">

    <button
      onClick={() => handleEdit(batch)}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Edit
    </button>

    <button
      onClick={() => handleDelete(batch._id)}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Delete
    </button>

  </div>
</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="py-8 text-center text-slate-500"
                        >
                          No batch records found.
                        </td>
                      </tr>
                    )}
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