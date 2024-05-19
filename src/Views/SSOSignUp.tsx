import SSOIcons from '../Components/SSOIcons'

export default function SSOSignUp() {
	return (
		<>
			<section className="ssoSignUp mb-[15px]">
				<section className="md:flex items-center justify-between mb-[25px]">
					<p className="text-[30px] font-bold">Sign up</p>
					<div className="registeredUser flex mt-[15px] md:mt-[0px]">
						<p>
							Already have an account?{' '}
							<a href="#" className="text-[#F36C27] font-semibold underline">Sign in</a>
						</p>
					</div>
				</section>
				<div className="flex gap-[15px] mb-[15px] w-full">
					<SSOIcons iconName="AppleIcon.svg" />
					<SSOIcons iconName="GoogleIcon.svg" />
					<SSOIcons iconName="MicrosoftIcon.svg" />
				</div>
				<div className="flex py-[15px] items-center">
					<div className="flex-grow border-t border-black/[0.56]"></div>
					<span className="mx-[15px] font-bold text-black/[0.56]">Or sign up via e-mail</span>
					<div className="flex-grow border-t border-black/[0.56]"></div>
				</div>
			</section>
		</>
	);
};