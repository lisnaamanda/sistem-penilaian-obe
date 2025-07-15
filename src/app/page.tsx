"use client";

import Link from "next/link";
import { Card, CardContent, Typography, Button, CardActions, Chip } from "@mui/material";
import { Settings, Input as InputIcon } from "@mui/icons-material";

export default function Home() {
  const classes = [
    { name: "Pemrograman Web", semester: "Semester 4", students: 35, status: "Belum Konfigurasi" },
    { name: "Sistem Informasi", semester: "Semester 5", students: 42, status: "Sudah Konfigurasi" },
    { name: "Jaringan Komputer", semester: "Semester 3", students: 28, status: "Belum Konfigurasi" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <Typography variant="h4" className="text-center text-blue-800 font-bold mb-8 tracking-wide">
        📊 Dashboard Kelas UDINUS
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((kelas, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:scale-105"
            sx={{
              borderRadius: "1.5rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              backgroundColor: "white",
            }}
          >
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#1E40AF" }}>
                {kelas.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748B", marginBottom: "8px" }}>
                {kelas.semester}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "16px" }}>
                👥 {kelas.students} Mahasiswa
              </Typography>

              <Chip
                label={kelas.status}
                color={kelas.status === "Sudah Konfigurasi" ? "success" : "warning"}
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              />
            </CardContent>

            <CardActions sx={{ padding: "16px", paddingTop: "0", justifyContent: "space-between" }}>
              <Link href="/config">
                <Button variant="contained" color="primary" size="small" startIcon={<Settings />}>
                  Atur Bobot Nilai
                </Button>
              </Link>
              <Link href="/input">
                <Button variant="outlined" color="secondary" size="small" startIcon={<InputIcon />}>
                  Input Nilai
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>

      <footer className="text-center mt-20 text-gray-400 text-sm">
  © {new Date().getFullYear()} UDINUS | Sistem Penilaian OBE
</footer>
    </main>
  );
}
