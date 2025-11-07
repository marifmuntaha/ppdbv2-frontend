import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import Head from "@/layout/head";
import {
    BlockContent,
    BlockDes,
    BlockHead,
    BlockTitle,
    Button, Col,
    Icon,
    PreviewCard, Row, RToast,
} from "@/components";
import Content from "@/layout/content";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [passState, setPassState] = useState(false);
    const [confirmPassState, setConfirmPassState] = useState(false);
    const navigate = useNavigate();

    const onFormSubmit = async (formData) => {
        setLoading(true);
        RToast('Pendaftaran Berhasil anda akan dialihkan kehalaman verifikasi', 'success');
        setTimeout(() => {
            navigate(`/auth/verifikasi/${formData.email}`);
            setLoading(false);
        }, 2000)
        // login(formData).then(() => {
        //     navigate("/");
        //     setLoading(false);
        // }).catch(() => setLoading(false));
    };

    const {  register, handleSubmit, formState: { errors } } = useForm();

    return <>
        <Head title="Buat Akun" />
        <Content>
            <Row className="gy-0">
                <Col lg="6" md="6" sm="12">
                    <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                        <BlockHead>
                            <BlockContent>
                                <BlockTitle tag="h4">BUAT AKUN</BlockTitle>
                                <BlockDes>
                                    <p>Buat akun PMB Yayasan Darul Hikmah</p>
                                </BlockDes>
                            </BlockContent>
                        </BlockHead>
                        <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                            <Row className="gy-0">
                                <div className="form-group col-md-6">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="name">
                                            Nama Lengkap
                                        </label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            id="name"
                                            {...register('name', { required: "Kolom ini tidak boleh kosong" })}
                                            placeholder="Masukkan Nama Lengkap anda"
                                            className="form-control-lg form-control" />
                                        {errors.name && <span className="invalid">{errors.name.message}</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="email">
                                            Alamat Email
                                        </label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            id="email"
                                            {...register('email', { required: "Kolom ini tidak boleh kosong" })}
                                            placeholder="Masukkan alamat email anda"
                                            className="form-control-lg form-control" />
                                        {errors.email && <span className="invalid">{errors.email.message}</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="password">Kata Sandi</label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <a
                                            href={"#password"}
                                            onClick={(ev) => {
                                                ev.preventDefault();
                                                setPassState(!passState);
                                            }}
                                            className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                                        >
                                            <Icon name="eye" className="passcode-icon icon-show"></Icon>
                                            <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                                        </a>
                                        <input
                                            type={passState ? "text" : "password"}
                                            id="password"
                                            {...register('password', { required: "Kolom ini tidak boleh kosong" })}
                                            placeholder="Masukkan kata sandi anda"
                                            className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                                        />
                                        {errors.password && <span className="invalid">{errors.password.message}</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="password_confirmation">Ulangi Sandi</label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <a
                                            href={"#password"}
                                            onClick={(ev) => {
                                                ev.preventDefault();
                                                setConfirmPassState(!confirmPassState);
                                            }}
                                            className={`form-icon lg form-icon-right passcode-switch ${confirmPassState ? "is-hidden" : "is-shown"}`}
                                        >
                                            <Icon name="eye" className="passcode-icon icon-show"></Icon>
                                            <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                                        </a>
                                        <input
                                            type={confirmPassState ? "text" : "password"}
                                            id="password_confirmation"
                                            {...register('password_confirmation', { required: "Kolom ini tidak boleh kosong" })}
                                            placeholder="Ulangi kata sandi anda"
                                            className={`form-control-lg form-control ${confirmPassState ? "is-hidden" : "is-shown"}`}
                                        />
                                        {errors.password_confirmation && <span className="invalid">{errors.password_confirmation.message}</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <div className="form-label-group">
                                        <label className="form-label" htmlFor="phone">
                                            Nomor HP
                                        </label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            id="phone"
                                            {...register('phone', { required: "Kolom ini tidak boleh kosong" })}
                                            placeholder="Masukkan Nomor HP anda"
                                            className="form-control-lg form-control" />
                                        {errors.phone && <span className="invalid">{errors.phone.message}</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <Button size="lg" className="btn-block" type="submit" color="success">
                                        {loading ? <Spinner size="sm" color="light" /> : "BUAT AKUN"}
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </PreviewCard>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                        <BlockHead>
                            <BlockContent>
                                <BlockTitle tag="h4">Informasi</BlockTitle>
                                <BlockDes>
                                    <p>Buat akun PMB Yayasan Darul Hikmah</p>
                                </BlockDes>
                            </BlockContent>
                        </BlockHead>
                    </PreviewCard>
                </Col>
            </Row>
        </Content>
    </>;
};
export default Register;
