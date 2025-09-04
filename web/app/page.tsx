"use client";

import { useState } from "react";
import styles from "./ask.module.css"; // 👈 Import the CSS module

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  async function ask() {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to fetch answer." });
    }
    setLoading(false);
  }

  return (
    <main className={styles.askContainer}>
      <h1 className={styles.askHeading}>AI Helpdesk (Stub)</h1>
      <p className={styles.askSubtext}>
        Ask a question. The backend will return a blank answer + echo for now.
      </p>

      <div className={styles.askInputRow}>
        <input
          type="text"
          placeholder="e.g. What are the refund policies?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={styles.askInput}
        />
        <button
          disabled={!question || loading}
          onClick={ask}
          className={styles.askButton}
        >
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>

      {response && (
        <div className={styles.askResponseContainer}>
          {response.error ? (
            <p className={styles.askError}>{response.error}</p>
          ) : (
            <>
              <h2 className={styles.askSectionTitle}>Answer</h2>
              <p>{response.answer || "(No answer yet)"}</p>

              <h3 className={styles.askSectionTitle}>Citations</h3>
              <ul>
                {response.citations?.length === 0 && <li>(none)</li>}
                {response.citations?.map((c: any, i: number) => (
                  <li key={i}>
                    <a href={c.uri} target="_blank" rel="noreferrer">
                      {c.title || c.uri}
                    </a>
                  </li>
                ))}
              </ul>

              <pre className={styles.askPre}>
                {JSON.stringify(response, null, 2)}
              </pre>
            </>
          )}
        </div>
      )}
    </main>
  );
}
