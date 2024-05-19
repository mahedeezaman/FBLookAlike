type FeatureItemProps = {
  imgSrc: string;
  title: string;
  description: string;
}

export default function FeatureItem({ imgSrc, title, description }: FeatureItemProps) {
  return (
    <>
      <div className='flex mb-[50px]'>
        <img src={`../src/ImageAssets/${imgSrc}`} alt="icon" className="w-[36px] h-[36px] mr-[15px]" />
        <section className="details">
          <p className="text-[21px] font-semibold mb-[15px] ">{title}</p>
          <p className="text-[16px]">{description}</p>
        </section>
      </div>
    </>
  );
};
