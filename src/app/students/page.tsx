"use client";

import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Chip } from "@mui/material";
import Link from "next/link";

// Dummy data: status nilai ditandai dengan nilai !== null
const students = [
  { id: "1", name: "Ayu", nilai: 85 },
  { id: "2", name: "Budi", nilai: null },
  { id: "3", name: "Citra", nilai: 75 },
  { id: "4", name: "Deni", nilai: null },
  { id: "5", name: "Eka", nilai: 90 },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <Typography variant="h4" align="center" className="text-blue-800 font-bold mb-8">
        📋 Daftar Mahasiswa
      </Typography>

      <Paper elevation={3} className="max-w-5xl mx-auto p-6 rounded-2xl shadow-lg bg-white">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-blue-700">Nama Mahasiswa</TableCell>
              <TableCell className="font-bold text-blue-700" align="center">Status Nilai</TableCell>
              <TableCell className="font-bold text-blue-700" align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map(({ id, name, nilai }) => (
              <TableRow key={id} hover>
                <TableCell>{name}</TableCell>

                {/* Kolom Status Nilai */}
                <TableCell align="center">
                  {nilai !== null ? (
                    <Chip label="✅ Sudah Dinilai" color="success" />
                  ) : (
                    <Chip label="❌ Belum Dinilai" color="warning" />
                  )}
                </TableCell>

                {/* Tombol Aksi */}
                <TableCell align="center">
                  <Link href={`/input/${id}`} passHref>
                    <Button
                      variant={nilai !== null ? "outlined" : "contained"}
                      color={nilai !== null ? "primary" : "success"}
                      size="small"
                      className="rounded-lg px-6"
                    >
                      {nilai !== null ? "Edit Nilai" : "Input Nilai"}
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Tombol Kembali ke Dashboard */}
      <div className="text-center mt-10">
        <Link href="/">
          <Button variant="outlined" color="primary" sx={{ borderRadius: "1rem", paddingX: "24px" }}>
            ← Kembali ke Dashboard
          </Button>
        </Link>
      </div>
      <footer className="text-center mt-20 text-gray-400 text-sm">
  © {new Date().getFullYear()} UDINUS | Sistem Penilaian OBE
</footer>
    </div>
  );
}

