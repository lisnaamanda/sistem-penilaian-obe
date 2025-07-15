"use client";

import { Typography, Slider, Button, Alert } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function ConfigPage() {
  const [bobot, setBobot] = useState({
    tugas: 20,
    uts: 25,
    uas: 35,
    proyek: 10,
    kuis: 10,
  });

  const [showAlert, setShowAlert] = useState(false);

  const total = Object.values(bobot).reduce((acc, curr) => acc + curr, 0);

  const handleChange = (name: string, value: number) => {
    setBobot({ ...bobot, [name]: value });
    setShowAlert(false); // sembunyikan alert jika slider digeser lagi
  };

  const handleSave = () => {
    setShowAlert(true); // tampilkan alert sukses
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <Typography variant="h4" align="center" className="text-blue-800 font-bold mb-8">
        ⚙️ Atur Bobot Nilai
      </Typography>

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {Object.keys(bobot).map((key) => (
          <div key={key} className="mb-6">
            <Typography className="font-semibold mb-1 capitalize text-blue-900">
              {key} : {bobot[key as keyof typeof bobot]}%
            </Typography>
            <Slider
              value={bobot[key as keyof typeof bobot]}
              onChange={(e, value) => handleChange(key, value as number)}
              step={1}
              min={0}
              max={100}
              sx={{ color: "#2563EB" }}
            />
          </div>
        ))}

        <Typography
          variant="h6"
          align="center"
          className="font-bold"
          sx={{ color: total === 100 ? "green" : "red", marginTop: "16px" }}
        >
          Total Bobot: {total}%
        </Typography>

        {showAlert && (
          <Alert severity="success" sx={{ mt: 4 }}>
            🎉 Konfigurasi berhasil disimpan!
          </Alert>
        )}

        <div className="text-center mt-6">
          <Button
            variant="contained"
            color={total === 100 ? "success" : "inherit"}
            disabled={total !== 100}
            onClick={handleSave}
            sx={{
              borderRadius: "1rem",
              paddingX: "24px",
              transition: "0.3s",
              '&:hover': { transform: total === 100 ? 'scale(1.05)' : 'none' }
            }}
          >
            Simpan Konfigurasi
          </Button>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/">
          <Button variant="outlined" color="secondary" sx={{ borderRadius: "1rem" }}>
            ← Kembali ke Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
