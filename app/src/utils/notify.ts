import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifies = {
    sucess: (alerta:string) => {
        toast.success(alerta, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            closeButton: false,
            pauseOnHover: false,
            theme: 'dark',
            className: 'mt-10'
    })},
    error: (alerta:string) => {
        toast.error(alerta, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            closeButton: false,
            pauseOnHover: false,
            theme: 'dark',
            className: 'mt-10'
        });
    },
    Container: ToastContainer
}

export default notifies