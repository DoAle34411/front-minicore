"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import DateFilter from "@/components/DateFilter";
import DepartmentTable from "@/components/DepartmentTable";
import EmployeeTable from "@/components/EmployeeTable";
import LoadingSpinner from "@/components/Loader";
import { fetchExpenses } from "@/services/dateFilter.dao";

export default function Home() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState({ departments: [], employees: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!startDate || !endDate) {
        setData({ departments: [], employees: [] });
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const fetchedData = await fetchExpenses(startDate, endDate);
        setData(fetchedData);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error("Error fetching expenses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Gastos Tracker</h1>
      <DateFilter setStartDate={setStartDate} setEndDate={setEndDate} />
      
      {!startDate || !endDate ? (
        <p style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
          Por favor selecciona las dos fechas antes de ver los gastos.
        </p>
      ) : loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
          {error}
        </p>
      ) : (
        <div>
          <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>Gastos por Departmento</h2>
          <DepartmentTable data={data.departments} />
          
          <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>Gastos por Empleado</h2>
          <EmployeeTable data={data.employees} />
        </div>
      )}
    </div>
  );
}
