"use client";
import PrimaryBtn from "@/components/PrimaryBtn";
import reactJsonTheme, { reactJsonDarkTheme } from "@/components/reactJsonTheme";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ClipboardCopy, FileDown, FileJson, RotateCcw, } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

const Home = () => {
  const [parsedJson, setParsedJson] = useState(null)
  const [rawJson, setRawJson] = useState(null);
  const [error, setError] = useState({
    message: '',
    show: false
  });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setRawJson(e.target.value);
    try {
      const json = JSON.parse(e.target.value);
      setError({
        message: '',
        show: false
      });
    } catch (error) {
      console.log("Invalid JSON data:", error.message);
      setError({
        message: error.message,
        show: true
      });
    }
  };

  const handleGenerateJson = () => {
    try {
      const json = JSON.parse(rawJson);
      setParsedJson(json);
      setError({
        message: '',
        show: false
      });
    } catch (error) {
      setParsedJson(null);
      setError({
        message: error.message,
        show: true
      });
    }
  }
  const onReset = () => {
    setRawJson('');
    setParsedJson(null);
  }
  const [shouldDownload, setShouldDownload] = useState(false);
  const handleDownload = () => {
    if (!rawJson || error.show) {
      toast.error("Please enter valid JSON data before downloading.");
      return;
    }
    if (typeof window === "undefined") return;
    setShouldDownload(true);
  };

  // Use useEffect to handle document usage on client only
  useEffect(() => {
    if (!shouldDownload) return;
    const blob = new Blob([rawJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'json_Genie.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShouldDownload(false);
  }, [shouldDownload, rawJson]);
  const handleCopy = () => {
    if (!rawJson || error.show) {
      toast.error("Please enter valid JSON data before copying.");
      return;
    }
    navigator.clipboard.writeText(rawJson)
      .then(() => {
        toast.success("JSON data copied to clipboard!");
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        toast.error("😞 Failed to copy JSON data.");
      });
  };
  if (!mounted) return null;
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center justify-center w-full h-fit py-4 ">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center">
          Welcome to JSON Genie
        </h1>
        <p className="mt-4 text-lg lg:text-lg md:text-md sm:text-xs text-center capitalize">
          Your go-to tool for generating and managing JSON data effortlessly. 😊
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-2 h-3/4  ">
        {/* add a text area to add input */}
        <textarea
          onChange={handleChange}
          rows={20}
          value={rawJson ? rawJson : ''}
          autoFocus
          minLength={2}
          style={{ minHeight: "120px" }}
          className="flex-1 p-4 border border-orange-500 rounded-l-md focus:outline-none min-h-[120px] sm:min-h-[160px] md:min-h-[200px] resize-y"
          placeholder="Enter your JSON data here..."
        />
        {
          error.show && (
            <div className="block md:hidden">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {error.message}
                </AlertDescription>
              </Alert>
            </div>
          )
        }

        <div className="flex flex-col justify-center gap-4 mt-4">
          <div className="text-center md:block hidden">
            <img src="/json-genie.svg" alt="JSON Genie Logo" className="inline-block h-24 w-24 ml-2" />
          </div>
          <PrimaryBtn disabled={!rawJson || error.show} onClick={handleGenerateJson}>
            <FileJson />
            Generate JSON
          </PrimaryBtn>
          <PrimaryBtn onClick={onReset}>
            <RotateCcw />
            Clear
          </PrimaryBtn>
          <div className="flex flex-row gap-1 content-center justify-center items-center">
            <PrimaryBtn onClick={handleDownload} disabled={!rawJson || error.show}>
              <FileDown />
              Download
            </PrimaryBtn>
            <PrimaryBtn onClick={handleCopy} disabled={!rawJson || error.show}>
              <ClipboardCopy />
              Copy
            </PrimaryBtn>
          </div>


        </div>
        <div className="flex-1 p-4 border overflow-y-auto  border-orange-500 rounded-l-md focus:outline-none min-h-[120px] sm:min-h-[160px] md:min-h-[200px] resize-y">
          <ReactJson
            style={{ height: "60vh", width: "100%", overflowY: "auto" }}
            src={parsedJson ? parsedJson : {}}
            theme={theme === "dark" ? reactJsonDarkTheme : reactJsonTheme}
            collapsed={false}
            indentWidth={2}
            displayObjectSize={false}
            displayArrayKey={false}
            name={false}
            iconStyle='triangle'
            enableClipboard={false}
            displayDataTypes={false}
          />

        </div>
      </div>
      {
        error.show && (
          <div className="hidden md:block w-1/2  px-2 mt-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription >
                {error.message}
              </AlertDescription>
            </Alert>
          </div>
        )
      }


    </main>
  );
};

export default Home;
