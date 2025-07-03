import { useState } from "react";
import { formatText, formatDate } from "@mjoonwoo/formatter";

function App() {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState<
    "lower" | "upper" | "title" | "date"
  >("title");

  const [dateFormat, setDateFormat] = useState("YYYY-MM-DD HH:mm:ss");

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  let result = "";
  if (format === "date") {
    result = formatDate(input || new Date(), dateFormat);
  } else {
    result = formatText(input, format);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md transition-all">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Text Formatter
        </h1>

        <label className="block text-sm font-medium mb-1">Input Text</label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your text here..."
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block text-sm font-medium mb-1">Select Format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as any)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="lower">lowercase — all lowercase</option>
          <option value="upper">UPPERCASE — all uppercase</option>
          <option value="title">Title Case — capitalize each word</option>
          <option value="date">Date Format — format as date/time</option>
        </select>

        {format === "date" && (
          <>
            <label className="block text-sm font-medium mb-1">
              Date Format String
            </label>
            <input
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
              placeholder="e.g. YYYY-MM-DD HH:mm:ss"
              className="w-full border p-2 rounded mb-4"
            />
          </>
        )}

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-1">Formatted Result</p>
          <div className="border p-3 rounded bg-gray-50 flex items-center justify-between">
            <span className="text-gray-800 break-all">
              {result || (
                <span className="text-gray-400">Nothing to show...</span>
              )}
            </span>
            <button
              onClick={() => handleCopy(result)}
              className="ml-4 text-blue-600 text-sm hover:underline"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
