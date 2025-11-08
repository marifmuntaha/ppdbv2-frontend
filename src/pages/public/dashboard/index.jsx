import React from "react";
import {useNavigate} from "react-router-dom";
import Head from "@/layout/head";
import Content from "@/layout/content";
import Image1 from "@/images/public/logo.png";
import "@/assets/scss/public/dashboard.scss";

const PublicDashboard = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Head title="Beranda" />
            <Content>
                <div className="ppdb-container">
                    {/* Header */}
                    <header className="ppdb-header fade-in">
                        <div className="header-content">
                            <div className="logo-section">
                                <div className="logo">
                                    <img src={String(Image1)} alt="Kemenag Logo" />
                                </div>
                                <div className="header-text">
                                    <h1>Selamat Datang di PMB Yayasan Darul Hikmah</h1>
                                    <h2>Menganti - Kedung - Jepara</h2>
                                    <h3>Tahun Ajaran 2026/2027</h3>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="ppdb-main">
                        <section className="info-section slide-in">
                            <div className="info-card">
                                <p className="text-center">
                                    Situs ini dipersiapkan sebagai pengganti pusat informasi dan pengolahan seleksi
                                    data murid/peserta PMB Yayasan Darul Hikmah Periode 2026/2027 secara online
                                    real time process untuk pelaksanaan PMB Online.
                                </p>
                            </div>
                        </section>
                        <section className="registration-section">
                            <h2 className="section-title slide-in">DATA PENDAFTARAN</h2>
                            <div className="jenjang-grid">
                                <div className="jenjang-card fade-in">
                                    <div className="jenjang-header">
                                        <h3>Raudhatul Atfal</h3>
                                    </div>
                                    <div className="jenjang-content">
                                        <div className="jalur-count">
                                            <span className="count">90</span>
                                            <span className="label">Calon Siswa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="jenjang-card fade-in">
                                    <div className="jenjang-header">
                                        <h3>Madrasah Ibtidaiyah</h3>
                                    </div>
                                    <div className="jenjang-content">
                                        <div className="jalur-count">
                                            <span className="count">160</span>
                                            <span className="label">Calon Siswa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="jenjang-card fade-in">
                                    <div className="jenjang-header">
                                        <h3>Madrasah Tsanawiyah</h3>
                                    </div>
                                    <div className="jenjang-content">
                                        <div className="jalur-count">
                                            <span className="count">190</span>
                                            <span className="label">Calon Siswa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="jenjang-card fade-in">
                                    <div className="jenjang-header">
                                        <h3>Madrasah Aliyah</h3>
                                    </div>
                                    <div className="jenjang-content">
                                        <div className="jalur-count">
                                            <span className="count">100</span>
                                            <span className="label">Calon Siswa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="action-section">
                            <div className="action-buttons">
                                <button className="btn btn-primary" onClick={() => {
                                    navigate('/auth/buat-akun')
                                }}>Daftar Sekarang</button>
                                <button className="btn btn-secondary" onClick={() => {
                                    navigate('/auth/masuk')
                                }}>Login Peserta</button>
                                <button className="btn btn-outline">Info Selengkapnya</button>
                            </div>
                        </section>
                    </main>
                </div>
            </Content>
        </React.Fragment>
    )
}

export default PublicDashboard;
