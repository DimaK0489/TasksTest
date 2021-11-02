import {useFormik} from "formik";
import {v1} from "uuid";
import {useDispatch} from "react-redux";
import {addUserAC} from "../../BLL/AppReducer";
import style from './AddUserForm.module.css'

export type FormikUserType = {
    id: string
    first_name: string
    last_name: string
    email: string
}

export const AddNewUser = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {id: v1(), first_name: '', last_name: '', email: ''},
        validate: (values) => {
            const errors: any = {};
            if (!values.first_name) {
                errors.first_name = 'Invalid data';
            }
            if (!values.last_name) {
                errors.last_name = "Invalid data"
            }
            if (!values.email) {
                errors.email = "Invalid data"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addUserAC(values))
            formik.resetForm()
        }
    });
    return (
        <form className={style.form_user} onSubmit={formik.handleSubmit}>
            <label htmlFor="New User">New User:</label>
            {formik.touched.email && <div style={{color: "red", textAlign: 'center'}}>{formik.errors.email}</div>}
            <input
                id="v1()"
                placeholder={'first_name'}
                className={style.input__enter}
                {...formik.getFieldProps('first_name')}

            />
            <input
                id="v1()"
                placeholder={'last_name'}
                className={style.input__enter}
                {...formik.getFieldProps('last_name')}
            />
            <input
                id="v1()"
                placeholder={'email'}
                className={style.input__enter}
                {...formik.getFieldProps('email')}
            />
            <button className={style.button__submit} type="submit">Submit</button>
        </form>
    )
}