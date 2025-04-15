
import { useState, useRef, useEffect } from "react";
import { Code, Copy, Play } from "lucide-react";

interface CodeEditorProps {
  initialHtml?: string;
  initialCss?: string;
  readOnly?: boolean;
}

const CodeEditor = ({
  initialHtml = "<div class=\"box\">Hover me!</div>",
  initialCss = ".box {\n  background-color: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  transition: transform 0.3s ease;\n}\n\n.box:hover {\n  transform: scale(1.1);\n}",
  readOnly = false,
}: CodeEditorProps) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const previewRef = useRef<HTMLIFrameElement>(null);

  const updatePreview = () => {
    if (previewRef.current) {
      const previewDoc = previewRef.current.contentDocument;
      if (previewDoc) {
        previewDoc.open();
        previewDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;">
              ${html}
            </body>
          </html>
        `);
        previewDoc.close();
      }
    }
  };

  useEffect(() => {
    updatePreview();
  }, [html, css]);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col">
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <button
            className={`flex items-center mr-4 pb-3 px-2 border-b-2 transition-colors ${
              activeTab === "html"
                ? "border-primary text-primary"
                : "border-transparent hover:border-gray-300 dark:hover:border-gray-500"
            }`}
            onClick={() => setActiveTab("html")}
          >
            <Code className="w-4 h-4 mr-2" />
            HTML
          </button>
          <button
            className={`flex items-center pb-3 px-2 border-b-2 transition-colors ${
              activeTab === "css"
                ? "border-primary text-primary"
                : "border-transparent hover:border-gray-300 dark:hover:border-gray-500"
            }`}
            onClick={() => setActiveTab("css")}
          >
            <Code className="w-4 h-4 mr-2" />
            CSS
          </button>

          <div className="ml-auto flex">
            <button
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              onClick={() =>
                copyToClipboard(activeTab === "html" ? html : css)
              }
              aria-label="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              onClick={updatePreview}
              aria-label="Run code"
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          {activeTab === "html" ? (
            <textarea
              className="w-full h-full min-h-[300px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 resize-none focus:outline-none"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              readOnly={readOnly}
              aria-label="HTML editor"
              spellCheck="false"
            ></textarea>
          ) : (
            <textarea
              className="w-full h-full min-h-[300px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 resize-none focus:outline-none"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              readOnly={readOnly}
              aria-label="CSS editor"
              spellCheck="false"
            ></textarea>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-medium">Preview</h3>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 flex-1 min-h-[300px]">
          <iframe
            ref={previewRef}
            title="Code Preview"
            className="w-full h-full border-0"
            sandbox="allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
