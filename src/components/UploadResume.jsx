
import { useRef, useState } from "react";
import "../components/css/UploadResume.css";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function UploadResume() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const validateFile = (selectedFile) => {
    if (!selectedFile) return false;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const extension = selectedFile.name.split(".").pop().toLowerCase();
    const validExtension = ["pdf", "doc", "docx"].includes(extension);

    if (!allowedTypes.includes(selectedFile.type) && !validExtension) {
      setMessage("Please select a PDF, DOC, or DOCX file.");
      setStatus("error");
      return false;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setMessage("File size must be less than 10 MB.");
      setStatus("error");
      return false;
    }

    setFile(selectedFile);
    setStatus("idle");
    setProgress(0);
    setMessage("");

    return true;
  };

  const handleFileChange = (event) => {
    validateFile(event.target.files?.[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    validateFile(event.dataTransfer.files?.[0]);
  };

  const removeFile = () => {
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setMessage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadResume = () => {
    if (!file) {
      setMessage("Please select your resume first.");
      setStatus("error");
      return;
    }

    setStatus("uploading");
    setProgress(0);
    setMessage("");

    const formData = new FormData();
    formData.append("resume", file);

    const xhr = new XMLHttpRequest();

    // Replace this URL with your actual backend upload endpoint.
    xhr.open("POST", "/api/resumes/upload");

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setStatus("success");
        setProgress(100);
        setMessage("Your resume has been uploaded successfully.");
        setFile(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setStatus("error");
        setMessage("Upload failed. Please try again.");
      }
    };

    xhr.onerror = () => {
      setStatus("error");
      setMessage("Unable to connect to the server. Please try again.");
    };

    xhr.onabort = () => {
      setStatus("error");
      setMessage("Upload was cancelled.");
    };

    xhr.send(formData);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <section id="upload-resume" className="upload-resume-section">
      <div className="upload-resume-glow upload-glow-one" />
      <div className="upload-resume-glow upload-glow-two" />

      <div className="container upload-resume-container">

        {/* SECTION INTRO */}
        <div className="upload-resume-heading">
          <span className="upload-eyebrow">
            <span className="upload-eyebrow-line" />
            CAREER OPPORTUNITIES
          </span>

          <h2>
            Your next opportunity
            <br />
            starts <em>with us.</em>
          </h2>

          <p>
            Interested in joining our team? Share your resume with us.
            We would love to explore how your skills can contribute
            to building the future.
          </p>
        </div>

        {/* UPLOAD CARD */}
        <div className="upload-resume-card">

          <div className="upload-card-top">
            <div>
              <span className="upload-card-label">CAREER APPLICATION</span>
              <h3>Upload Your Resume</h3>
            </div>

            <div className="upload-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 16V4m0 0L7 9m5-5 5 5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* DROP AREA */}
          <div
            className={`resume-dropzone ${dragging ? "dragging" : ""} ${
              file ? "has-file" : ""
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              hidden
            />

            {!file ? (
              <>
                <div className="dropzone-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15V3m0 0L7 8m5-5 5 5M5 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h4>
                  Drag & drop your resume here
                </h4>

                <p>
                  or <span>browse files</span> from your device
                </p>

                <small>PDF, DOC or DOCX · Maximum 10 MB</small>
              </>
            ) : (
              <div className="selected-resume">
                <div className="selected-file-icon">PDF</div>

                <div className="selected-file-info">
                  <strong>{file.name}</strong>
                  <small>{formatFileSize(file.size)}</small>
                </div>

                <button
                  type="button"
                  className="remove-resume"
                  aria-label="Remove selected resume"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeFile();
                  }}
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* PROGRESS */}
          {status === "uploading" && (
            <div className="resume-progress">
              <div className="resume-progress-info">
                <span>Uploading resume...</span>
                <strong>{progress}%</strong>
              </div>

              <div className="resume-progress-track">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {/* FEEDBACK */}
          {message && (
            <div
              className={`resume-feedback ${status}`}
              role="status"
            >
              {status === "success" ? "✓" : "!"} {message}
            </div>
          )}

          {/* UPLOAD BUTTON */}
          <button
            type="button"
            className="resume-upload-btn"
            onClick={uploadResume}
            disabled={!file || status === "uploading"}
          >
            <span>
              {status === "uploading"
                ? "Uploading..."
                : "Submit Your Resume"}
            </span>

            <b>↗</b>
          </button>

          <div className="upload-privacy">
            <span>🔒</span>
            Your information will be handled securely.
          </div>

        </div>
      </div>
    </section>
  );
}
