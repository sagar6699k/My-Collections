import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

export interface formDataType {
  name: string;
  email: string;
}

const initialFormData : formDataType = {
  name: "",
  email: "",
}

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const context = useUserContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    context?.handleData(formData);
    setFormData(initialFormData);
  };

  const tableHeaders =
    context?.data.length > 0
      ? Object.keys(context.data[0]).map((key, index) => (
          <th key={index}>{key}</th>
        ))
      : null;

  const tableBody =
    context?.data.length > 0
      ? context?.data.map((ele, index) => (
          <tr>
            <td key={index}>{ele.name}</td>
            <td key={index}>{ele.email}</td>
          </tr>
        ))
      : null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        borderRadius: "10px",
        padding: "1rem",
        background:"#f8fafa"
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name..."
            onChange={handleChange}
            value={formData.name}
            required
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email..."
            onChange={handleChange}
            value={formData.email}
            required
          />
          <br />

          <small>(required)</small>
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={{ width: "60%",padding: "1rem", borderRadius: "10px", textAlign:"center", background:"#FFFFFF" }}>
        <h2>Users List</h2>
        <table style={{width:"100%"}} border={context?.data.length > 0 ? 1 : 0} cellPadding={10}>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoForm;
