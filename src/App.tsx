//workz ** /workz ** /workz
import { useState } from "react";
import "./App.css";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { ethers } from "ethers";
import type { Result } from "@zkpass/transgate-js-sdk/lib/types";
import Blog from "./pages/Blog";

export type TransgateError = {
  message: string;
  code: number;
};

const App = () => {
  const appId = import.meta.env.VITE_APP_ID;
  const schemaId = import.meta.env.VITE_SCHEMA_ID; 
  const [result, setResult] = useState<null | { status: string; message: string }>(null);
  const [showBlog, setShowBlog] = useState(false); 
  const [isVerifying, setIsVerifying] = useState(false); 

  const requestVerifyMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true); 
    console.log(appId ,schemaId);

    try {
      const connector = new TransgateConnect(appId); 
      const isAvailable = await connector.isTransgateAvailable();

      if (isAvailable) {
        const provider = window.ethereum ? new ethers.BrowserProvider(window.ethereum) : null;
        const signer = await provider?.getSigner();
        const recipient = await signer?.getAddress();
        const res = (await connector.launch(schemaId, recipient)) as Result;

        // Verifying the result
        const verifiedResult = connector.verifyProofMessageSignature("evm", schemaId, res);

        if (verifiedResult) {
          alert("Verification successful!");
          setResult({ status: "Success", message: "You are verified!" });
          setShowBlog(true); // Redirect to blog on success
        } else {
          alert("Verification failed.");
          setResult({ status: "Failed", message: "Verification failed, please try again." });
        }
      } else {
        alert("zkPass Transgate is not available. Please install the extension.");
        setResult({ status: "Failed", message: "zkPass Transgate is not available." });
      }
    } catch (error) {
      const transgateError = error as TransgateError;
      alert(`Transgate Error: ${transgateError.message}`);
      setResult({ status: "Failed", message: `Error: ${transgateError.message}` });
    } finally {
      setIsVerifying(false); 
    }
  };

  if (showBlog) {
    return <Blog />;
  }

  return (
    <div className="app">
      <h1>Welcome to the Exclusive Content</h1>
      <p>
        In order to access this blog, we need to verify your identity using a secure and private Zero Knowledge Proof (ZKP). This process ensures that only the necessary data is shared for verification.
      </p>
      <p>
        Please click the button below to start the verification process. We will not collect any sensitive data—only confirm that you meet the required criteria for access.
      </p>

      <form className="form" onSubmit={requestVerifyMessage}>
        <button type="submit" disabled={isVerifying}>
          {isVerifying ? "Verifying..." : "Start Verification"}
        </button>
      </form>

      {isVerifying && <p className="loading-text">Verification is in progress...</p>}

      {result !== null && (
        <div className="result">
          <h3>{result.status}</h3>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
};

export default App;