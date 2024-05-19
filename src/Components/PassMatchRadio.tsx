import { FaCheck } from 'react-icons/fa';

type PassMatchProps = {
	conditionMet: Boolean;
	description: string;
}

export default function PassMatchPropsRadio({ conditionMet, description }: PassMatchProps) {
	return (
		<>
			<div className="flex items-center py-[10px]">
				<div className={`mr-[10px] w-[20px] h-[20px] flex flex-shrink-0 items-center justify-center rounded-full ${conditionMet ? 'bg-[#0A3C55]' : 'bg-[#B5C4CC]'}`}>
					{conditionMet && <FaCheck className="text-white w-[15px] h-[15px]" />}
				</div>
				<label className="mr-[15px]">{description}</label>
			</div>
		</>
	);
};
