import React, { useState } from "react";
import { Form, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    Button,
    Icon,
    PreviewCard, RToast,
} from "@/components";
// import {login} from "@/api/auth";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [passState, setPassState] = useState(false);
    // const {executeRecaptcha} = useGoogleReCaptcha();
    const navigate = useNavigate();

    const onFormSubmit = async (formData) => {
        setLoading(true);
        RToast('Berhasil masuk, anda akan di alihahkan dalam 2 detik', 'success');
        setTimeout(() => {
            navigate("/siswa");
        }, 200);
        // login(formData).then(() => {
        //     navigate("/");
        //     setLoading(false);
        // }).catch(() => setLoading(false));
    };

    const {  register, handleSubmit, formState: { errors } } = useForm();

    return <>
        <Head title="Masuk" />
        <Block className="nk-block-middle nk-auth-body  wide-xs">
            <div className="brand-logo pb-4 text-center">
                <Link to={"/"} className="logo-link">
                    <img className="logo-light logo-img logo-img-lg" src={String(Logo)} alt="logo" />
                    <img className="logo-dark logo-img logo-img-lg" src={String(LogoDark)} alt="logo-dark" />
                </Link>
            </div>

            <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                <BlockHead>
                    <BlockContent>
                        <BlockTitle tag="h4">MASUK</BlockTitle>
                        <BlockDes>
                            <p>Akses Sistem PMB Yayasan Darul Hikmah.</p>
                        </BlockDes>
                    </BlockContent>
                </BlockHead>
                <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
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
                            {errors.name && <span className="invalid">{errors.name.message}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label className="form-label" htmlFor="password">
                                Kata Sandi
                            </label>
                            <Link className="link link-primary link-sm" to={`/auth/lupa-sandi`}>
                               Lupa Sandi?
                            </Link>
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
                                className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`} />
                            {errors.password && <span className="invalid">{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <Button size="lg" className="btn-block" type="submit" color="primary">
                            {loading ? <Spinner size="sm" color="light" /> : "MASUK"}
                        </Button>
                    </div>
                </Form>
            </PreviewCard>
        </Block>
        <AuthFooter />
    </>;
};
export default Login;
