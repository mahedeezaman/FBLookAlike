type SSOIconsProps = {
  iconName: string;
}

export default function SSOIcons({iconName}: SSOIconsProps) {
	return (
		<>
			<button className="flex-auto border border-[#AEAEAE] bg-white rounded-lg h-[45px] flex justify-center items-center active:scale-95 hover:scale-105" onClick={(e) => {e.preventDefault();}}>
        <img src={`../src/ImageAssets/${iconName}`} alt="icon" className="w-[24px] h-[24px]" />
			</button>
		</>
	);
}