import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Alert} from "reactstrap";
import Logo from "@/images/logo.png";
import LogoDark from "@/images/logo-dark.png";
import Head from "@/layout/head";
import AuthFooter from "@/layout/footer/auth";
import {
    Block,
    BlockContent,
    BlockDes,
    BlockHead,
    BlockTitle,
    PreviewCard,
} from "@/components";
import {Icon} from "@/components";

const Signature = () => {
    const {token} = useParams();
    const [letter, setLetter] = useState({});

    return <>
        <Head title="Keaslian Surat"/>
        <Block className="nk-block-middle nk-auth-body  wide-sm">
            <div className="brand-logo pb-4 text-center">
                <Link to={"/"} className="logo-link">
                    <img className="logo-light logo-img logo-img-lg" src={String(Logo)} alt="logo"/>
                    <img className="logo-dark logo-img logo-img-lg" src={String(LogoDark)} alt="logo-dark"/>
                </Link>
            </div>
            <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                <BlockHead>
                    <BlockContent>
                        <BlockTitle tag="h4">CEK TANDA TANGGAN</BlockTitle>
                        <BlockDes>
                            <p>Pastikan detail tanda tangan sama dengan dibawah ini</p>
                        </BlockDes>
                        {letter !== null ? (
                            <table className="table table-bordered mt-3">
                                <tbody>
                                <tr>
                                    <td>Nama Tertanda Tangan</td>
                                    <td>Sholihin, S.Ag.</td>
                                </tr>
                                <tr>
                                    <td>Tanggal Terbit</td>
                                    <td>11 November 2025</td>
                                </tr>
                                <tr>
                                    <td>Nomor</td>
                                    <td>010/PMB.REG.1/MTs.DH/X/2025</td>
                                </tr>
                                <tr>
                                    <td>Jenis Surat</td>
                                    <td>Blanko Pendaftaran</td>
                                </tr>
                                <tr>
                                    <td>Nama Siswa</td>
                                    <td>Achmad Wikramawardhana</td>
                                </tr>
                                </tbody>
                            </table>
                        ) : (
                            <Alert className="alert-icon mt-3" color="danger">
                                <Icon name="alert-circle"/>
                                <strong>Data tanda tangan tidak ditemukan</strong>. Harap periksa kembali surat anda.
                            </Alert>
                        )}
                    </BlockContent>
                </BlockHead>

            </PreviewCard>
        </Block>
        <AuthFooter/>
    </>;
};
export default Signature;
