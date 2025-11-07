import React, {useState} from "react";
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
    PreviewCard, RToast,
} from "@/components";

const Verify = () => {
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(60);
    const navigate = useNavigate();

    const onFormSubmit = async (formData) => {
        setLoading(true);
        RToast('Verifikasi berhasil, anda akan dialihkan ke Dashboard', 'success');
        setTimeout(() => {
            navigate('/siswa/dashboard')
        }, 2000)
        // login(formData).then(() => {
        //     navigate("/");
        //     setLoading(false);
        // }).catch(() => setLoading(false));
    };

    setTimeout(() => {
        time > 0 && setTime(time - 1);
    }, 1000)

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
                        <BlockTitle tag="h4">VERIFIKASI NOMOR HP</BlockTitle>
                        <BlockDes>
                            <p>Silahkan cek whatsapp anda, kami telah mengirimkan kode verifikasi.</p>
                        </BlockDes>
                    </BlockContent>
                </BlockHead>
                <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label className="form-label" htmlFor="code">
                                Kode Verifikasi
                            </label>
                        </div>
                        <div className="form-control-wrap">
                            <div className="input-group input-group-lg">
                                <input
                                    type="text"
                                    id="code"
                                    {...register('code', { required: "Kolom ini tidak boleh kosong" })}
                                    placeholder="Masukkan kode verifikasi anda"
                                    className="form-control-lg form-control" />
                                <div className="input-group-append">
                                    <Button color="info">{time > 0 ? time + 's' : 'KIRIM ULANG'}</Button>
                                </div>
                                {errors.code && <span className="invalid">{errors.code.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <Button size="lg" className="btn-block" type="submit" color="primary">
                            {loading ? <Spinner size="sm" color="light" /> : "VERIFIKASI"}
                        </Button>
                    </div>
                </Form>
            </PreviewCard>
        </Block>
        <AuthFooter />
    </>;
};
export default Verify;
