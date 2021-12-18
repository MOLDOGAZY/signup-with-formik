import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
	const validate = Yup.object({
		firstName: Yup.string().max(15, 'Must be 15 characters or less ...').required('Required!!!'),
		lastName: Yup.string().max(15, 'Must be 20 characters or less ...').required('Required!!!'),
		email: Yup.string().email('Email is invalid').required('Email is required!!!'),
		password: Yup.string().min(8, 'Password must be at least 8 characters ...').required('Password is required!!!'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must macth').required('Confirm password is required!!!')
	})
	return (
		<Formik 
		initialValues={{
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword:''
			}}
			validationSchema={validate} onSubmit={values => {console.log(values)}}
			>

			{formik => (
				<div>
					<h1 className="my-4 font-weight-bold-display-4">Sign up</h1>
					<Form>
						<TextField label='First Name' name='firstName' type='text'/>
						<TextField label='Last Name' name='lastName' type='text'/>
						<TextField label='Your email' name='email' type='email'/>
						<TextField label='Password' name='password' type='password'/>
						<TextField label='Confirm password' name='confirmPassword' type='password'/>
						<button className='btn btn-dark-outline border-white text-light mt-3' type='submit'>Register</button>
						<button className='btn btn-danger mt-3 reset' type='reset'>Reset</button>
					</Form>
				</div>
				)}
		</Formik>
	)
}
