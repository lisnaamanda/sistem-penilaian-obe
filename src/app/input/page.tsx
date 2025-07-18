"use client";

import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
} from "@mui/material";
import Link from "next/link";

const gradeComponents = ["Tugas", "UTS", "UAS", "Proyek", "Kuis"];

export default function InputPage() {
  const [grades, setGrades] = useState<Record<string, number>>(
    gradeComponents.reduce((acc, comp) => ({ ...acc, [comp]: 0 }), {})
  );

  const [showSuccess, setShowSuccess] = useState(false);

  const handleGradeChange = (component: string, value: string) => {
    const num = Number(value);
    if (num >= 0 && num <= 100) {
      setGrades((prev) => ({ ...prev, [component]: num }));
    }
  };

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const totalGrade = gradeComponents.reduce(
    (sum, comp) => sum + (grades[comp] || 0) * 0.2,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <Paper elevation={3} className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg bg-white">
        <Typography variant="h5" className="text-blue-800 font-bold mb-6">
          ✍️ Input Nilai Mahasiswa
        </Typography>

        <Typography variant="subtitle1" className="mb-6 font-semibold text-blue-700">
          Mahasiswa: - (Silakan input manual)
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Komponen Nilai</b></TableCell>
              <TableCell><b>Nilai (0-100)</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gradeComponents.map((comp) => (
              <TableRow key={comp}>
                <TableCell>{comp}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={grades[comp]}
                    onChange={(e) => handleGradeChange(comp, e.target.value)}
                    inputProps={{ min: 0, max: 100 }}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell><b>Total Nilai (Estimasi)</b></TableCell>
              <TableCell className="font-bold text-green-700">
                {totalGrade.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {showSuccess && (
          <Alert severity="success" sx={{ mt: 4 }}>
            🎉 Nilai berhasil disimpan!
          </Alert>
        )}

        <div className="mt-8 flex justify-between">
          <Link href="/students">
            <Button variant="outlined" color="secondary">
              ← Kembali ke Daftar Mahasiswa
            </Button>
          </Link>

          <Button variant="contained" color="primary" onClick={handleSave}>
            Simpan Nilai
          </Button>
        </div>
      </Paper>

      <footer className="text-center mt-20 text-gray-400 text-sm">
        © {new Date().getFullYear()} UDINUS | Sistem Penilaian OBE
      </footer>
    </div>
  );
}
