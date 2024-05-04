"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebaseConfig";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function addDataToFireStore(name, message) {
    try {
      const docRef = await addDoc(collection(db, "message"), {
        name: name,
        message: message,
      });
      console.log("Document written with Id: ", docRef.id);
    } catch (error) {
      console.error("Error adding document", error);
      return false;
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, message);
    if (added) {
      setName("");
      setMessage("");
      alert("Data added to db");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "grey", color: "black", padding: "20px" }}
      >
        <label htmlFor="name" style={{ marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px", padding: "10px" }}
          />
        </label>
        <label
          htmlFor="message"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Message:
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ marginLeft: "10px", marginTop: "5px", padding: "10px" }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Data
        </button>
      </form>
      <div></div>
    </div>
  );
}
