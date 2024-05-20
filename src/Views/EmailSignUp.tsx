import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PassMatchPropsRadio from '../Components/PassMatchRadio';

type SignupFormVal = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	applicationAgreement: boolean;
	privacyPolicy: boolean
};

export default function EmailSignUp() {
	const {
		register,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isValid },
	} = useForm<SignupFormVal>({
		mode: 'all'
	});

	const [focusedField, setFocusedField] = useState<string | null>(null);
	const [showPassword, setShowPassword] = useState(false);
	const password = watch('password');

	const [passwordRequirements, setPasswordRequirements] = useState({
		hasUpperCase: false,
		hasLowerCase: false,
		hasNumber: false,
		hasSpecialChar: false,
		hasMinLength: false,
	});

	useEffect(() => {
		trigger();
	}, []);

	useEffect(() => {
		const requirements = {
			hasUpperCase: /[A-Z]/.test(password),
			hasLowerCase: /[a-z]/.test(password),
			hasNumber: /\d/.test(password),
			hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
			hasMinLength: password?.length >= 8,
		};
		setPasswordRequirements(requirements);
	}, [password]);

	const formOnSubmit = (data: SignupFormVal) => {
		console.log('form submitted', data);
	};

	const allRequirementsMet = Object.values(passwordRequirements).every(Boolean);

	return (
		<div>
			<form onSubmit={handleSubmit(formOnSubmit)} noValidate>
				<section className="py-[15px]">
					<label htmlFor="firstName">First Name:</label>
					<input
						className={`w-full h-[55px] mt-[5px] focus:outline-none border ${errors.firstName && focusedField === 'firstName' ? 'border-red-500 ' : 'border-[#AEAEAE]'
							} bg-white rounded-lg p-[15px]`}
						placeholder="Required!"
						type="text"
						id="firstName"
						{...register('firstName', {
							required: 'First name is required',
						})}
						onFocus={() => setFocusedField('firstName')}
						onBlur={() => setFocusedField(null)}
					/>
					{focusedField === 'firstName' && errors.firstName && (
						<span className="text-red-500 text-sm">{errors.firstName.message}</span>
					)}
				</section>

				<section className="py-[15px]">
					<label htmlFor="lastName">Last Name:</label>
					<input
						className={`w-full h-[55px] mt-[5px] focus:outline-none border ${errors.lastName && focusedField === 'lastName' ? 'border-red-500' : 'border-[#AEAEAE]'
							} bg-white rounded-lg p-[15px]`}
						placeholder="Required!"
						type="text"
						id="lastName"
						{...register('lastName', {
							required: 'Last name is required',
						})}
						onFocus={() => setFocusedField('lastName')}
						onBlur={() => setFocusedField(null)}
					/>
					{focusedField === 'lastName' && errors.lastName && (
						<span className="text-red-500 text-sm">{errors.lastName.message}</span>
					)}
				</section>

				<section className="py-[15px]">
					<label htmlFor="email">Email:</label>
					<input
						className={`w-full h-[55px] mt-[5px] focus:outline-none border ${errors.email && focusedField === 'email' ? 'border-red-500' : 'border-[#AEAEAE]'
							} bg-white rounded-lg p-[15px]`}
						placeholder="Required!"
						type="text"
						id="email"
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Please enter a valid email address',
							},
						})}
						onFocus={() => setFocusedField('email')}
						onBlur={() => setFocusedField(null)}
					/>
					{focusedField === 'email' && errors.email && (
						<span className="text-red-500 text-sm">{errors.email.message}</span>
					)}
				</section>

				<section className="py-[15px]">
					<label htmlFor="phoneNumber">Phone Number:</label>
					<input
						className={`w-full h-[55px] mt-[5px] focus:outline-none border ${errors.phoneNumber && focusedField === 'phoneNumber' ? 'border-red-500' : 'border-[#AEAEAE]'
							} bg-white rounded-lg p-[15px]`}
						placeholder="Required!"
						type="tel"
						id="phoneNumber"
						{...register('phoneNumber', {
							required: 'Phone number is required',
							pattern: {
								value: /^\+?[1-9]\d{1,14}$/,
								message: 'Please enter a valid phone number'
							},
						})}
						onFocus={() => setFocusedField('phoneNumber')}
						onBlur={() => setFocusedField(null)}
					/>
					{focusedField === 'phoneNumber' && errors.phoneNumber && (
						<span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
					)}
				</section>


				<section className="py-[15px]">
					<label htmlFor="password">Password:</label>
					<div className={` h-[55px] mt-[5px] border ${!allRequirementsMet && focusedField === 'password'
						? 'border-red-500'
						: 'border-[#AEAEAE]'
						} bg-white rounded-lg flex items-center justify-between`}>
						<input
							className={`w-full px-[15px] pr-[40px] focus:outline-none`}
							placeholder="********"
							type={showPassword ? 'text' : 'password'}
							id="password"
							{...register('password', {
								required: 'Password is required',
							})}
							onFocus={() => setFocusedField('password')}
							onBlur={() => setFocusedField(null)}
						/>
						<span
							className="pr-[15px] cursor-pointer"
							onClick={() => { setShowPassword(!showPassword) }}
						>
							{showPassword ? 'Hide' : 'Show'}
						</span>
					</div>
					{focusedField === 'password' && errors.password && (
						<span className="text-red-500 text-sm">{errors.password.message}</span>
					)}

					<div className="grid grid-cols-2 pt-[10px]">
						<PassMatchPropsRadio conditionMet={passwordRequirements.hasUpperCase} description="Uppercase" />
						<PassMatchPropsRadio conditionMet={passwordRequirements.hasLowerCase} description="Lowercase" />
						<PassMatchPropsRadio conditionMet={passwordRequirements.hasNumber} description="Number" />
						<PassMatchPropsRadio conditionMet={passwordRequirements.hasSpecialChar} description="Special character" />
						<PassMatchPropsRadio conditionMet={passwordRequirements.hasMinLength} description="Minimum 8 character" />
					</div>
				</section>

				{allRequirementsMet && (
					<section className="py-[15px]">
						<label htmlFor="confirmPassword">Re-type Password:</label>
						<input
							className={`w-full h-[55px] mt-[5px] focus:outline-none border ${errors.confirmPassword && focusedField === 'confirmPassword'
								? 'border-red-500'
								: 'border-[#AEAEAE]'
								} bg-white rounded-lg p-[15px]`}
							placeholder="********"
							type="password"
							id="confirmPassword"
							{...register('confirmPassword', {
								required: 'Please re-type your password',
								validate: (value) => value === password || 'Passwords do not match',
							})}
							onFocus={() => setFocusedField('confirmPassword')}
							onBlur={() => setFocusedField(null)}
						/>
						{focusedField === 'confirmPassword' && errors.confirmPassword && (
							<span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
						)}
					</section>
				)}

				<div className="AppAgreement text-[18px] flex items-center my-[15px]">
					<input
						className={`flex-shrink-0 appearance-none mr-[15px] w-[30px] h-[30px] clip-rounded ${errors.applicationAgreement ? 'bg-[#B5C4CC]' : 'appearance-auto accent-[#0A3C55]'}`}
						type="checkbox"
						id="applicationAgreement"
						{...register('applicationAgreement', { required: 'You must agree to the application agreement' })}
					/>
					<label htmlFor="applicationAgreement">
						I understand and agree to the use of{' '}
						<a href="#" onClick={(e) => e.preventDefault()} className="font-semibold underline">
							application agreement
							<img src="/ExternalLinkIcon.svg" alt="icon" className=" inline-block ml-[5px]" />
						</a>
					</label>
				</div>

				<div className="PrivacyPolicy text-[18px] flex items-center my-[15px]">
					<input
						className={`flex-shrink-0 appearance-none mr-[15px] w-[30px] h-[30px] clip-rounded ${errors.privacyPolicy ? 'bg-[#B5C4CC]' : 'appearance-auto accent-[#0A3C55]'}`}
						type="checkbox"
						id="privacyPolicy"
						{...register('privacyPolicy', { required: 'You must agree to the privacy policy' })}
					/>
					<label htmlFor="privacyPolicy">
						I understand and agree the information submitted will be used in line with our{' '}
						<a href="#" onClick={(e) => e.preventDefault()} className="font-semibold underline">
							Privacy Policy
							<img src="/ExternalLinkIcon.svg" alt="icon" className=" inline-block ml-[5px]" />
						</a>
					</label>
				</div>

				<button
					type="submit"
					className={`w-full h-[60px] bg-[#093C55] my-[40px] text-[21px] font-bold text-white rounded-lg flex justify-center items-center hover:shadow-lg ${!isValid ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
						}`}
					disabled={!isValid}
				>
					Sign up
				</button>
			</form>
		</div>
	);
}

