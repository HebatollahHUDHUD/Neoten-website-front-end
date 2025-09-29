import { About } from "@/schemas/shared";
import Image from "next/image";

const CEOMessage = ({ content }: { content: About }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-8">
      <div className="col-span-1 place-content-center">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-start">
          <Image
            src={content.about_page_speech_image}
            alt="ceo"
            width={100}
            height={20}
            quality={100}
            className="object-cover border-4 rounded-full border-[#00A699]"
          />
          <Image
            src="/Path 180.svg"
            alt=""
            width={20}
            height={20}
            quality={100}
            className="object-cover mt-3"
          />
          <p className="font-medium text-sm py-4 max-w-[360px]">
            {content.about_page_speech_quote}
          </p>
          <Image
            src={content.about_page_speech_signature}
            alt="ceo"
            width={150}
            height={20}
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <div className="col-span-1 flex justify-center items-center">
        <div className="bg-[#00A699] text-white text-start  w-full aspect-[4/3] px-10 py-14">
          <div className="border-s-4 border-s-white pl-7 -ml-10">
            <h1 className="font-bold text-3xl max-w-xs">
              {content.about_page_speech_title}
            </h1>
          </div>
          <p className="font-normal text-sm whitespace-pre-line py-5">
            {content.about_page_speech_desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
