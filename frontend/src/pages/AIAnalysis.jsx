import { useState } from "react";
import api from "../services/api";

const AIAnalysis = () => {

  const [batchDetails, setBatchDetails] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleAnalyze = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setAnalysis("");

    try {

      const response = await api.post("/ai/analyze", {
        batchDetails
      });


      setAnalysis(response.data.analysis);


    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.message ||
        "AI request failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen bg-slate-50 p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Batch Analysis
      </h1>


      <form onSubmit={handleAnalyze}
        className="bg-white p-6 rounded-xl shadow max-w-3xl">


        <textarea

          value={batchDetails}

          onChange={(e)=>setBatchDetails(e.target.value)}

          placeholder="Enter batch details..."

          className="w-full border p-3 rounded-lg h-40"

        />


        <button

          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"

        >

          {loading ? "Analyzing..." : "Analyze Batch"}

        </button>


      </form>


      {error && (

        <div className="mt-5 bg-red-100 text-red-700 p-4 rounded">

          {error}

        </div>

      )}



      {analysis && (

        <div className="mt-6 bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-3">

            AI Result

          </h2>


          <pre className="whitespace-pre-wrap">

            {analysis}

          </pre>


        </div>

      )}


    </div>

  );

};


export default AIAnalysis;