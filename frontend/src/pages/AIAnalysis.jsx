import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

const AIAnalysis = () => {
  const [batchDetails, setBatchDetails] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAnalyze = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);
    setAnalysis("");

    // Input validation
    if (!batchDetails.trim()) {
      setError("Please enter batch details before starting the analysis.");
      return;
    }

    if (batchDetails.trim().length < 10) {
      setError("Please provide more details about the batch for better analysis.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/ai/analyze", {
        batchDetails: batchDetails.trim(),
      });

      setAnalysis(response.data.analysis);
      setSuccess(true);
    } catch (err) {
      console.error("AI Analysis Error:", err);

      if (err.response?.status === 401) {
        setError("Your session has expired. Please log in again.");
      } else if (err.response?.status === 429) {
        setError(
          "The AI service is temporarily busy. Please wait a moment and try again."
        );
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError(
          "Unable to analyze the batch right now. Please check your connection and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setBatchDetails("");
    setAnalysis("");
    setError("");
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-green-100 text-green-600 mb-4">
                <Sparkles className="h-7 w-7" />
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                AI Batch Analysis
              </h1>

              <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                Use AI to analyze your production batch information and
                receive quality insights, possible risks, recommendations,
                and traceability notes.
              </p>
            </div>

            {/* Analysis Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">

              <form onSubmit={handleAnalyze}>

                <label
                  htmlFor="batchDetails"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Batch Details
                </label>

                <textarea
                  id="batchDetails"
                  value={batchDetails}
                  onChange={(e) => setBatchDetails(e.target.value)}
                  placeholder="Example: Batch B101, Lavender Oil, harvest date 2025-07-01, moisture content 8%, certificate verified..."
                  disabled={loading}
                  className="w-full min-h-[180px] rounded-xl border border-slate-300 p-4 text-sm text-slate-900 placeholder-slate-400 resize-y focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Provide as much batch information as possible for a more
                  useful analysis.
                </p>

                {/* Error */}
                {error && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />

                    <p className="text-sm">
                      {error}
                    </p>
                  </div>
                )}

                {/* Success */}
                {success && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />

                    <p className="text-sm">
                      Batch analysis completed successfully.
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition disabled:bg-green-400 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Analyzing Batch...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" />
                        Analyze Batch
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={loading}
                    className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Clear
                  </button>

                </div>
              </form>
            </div>

            {/* AI Result */}
            {analysis && (
              <div className="mt-8 rounded-2xl border border-green-200 bg-white shadow-sm overflow-hidden">

                <div className="flex items-center gap-3 border-b border-green-100 bg-green-50 px-5 sm:px-8 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      AI Analysis Result
                    </h2>

                    <p className="text-sm text-slate-600">
                      Generated analysis based on the provided batch details.
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="whitespace-pre-wrap break-words text-sm sm:text-base leading-7 text-slate-700">
                    {analysis}
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAnalysis;