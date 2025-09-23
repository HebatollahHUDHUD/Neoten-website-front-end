"use client";
import PageHeader from "@/components/common/pageHeader";
import { notFound, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
const jobs = [
  {
    id: 1,
    title: "Logistics Officer",
    description:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.`,
  },
  {
    id: 2,
    title: "Plant Manager",
    description:
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.`,
  },
  {
    id: 3,
    title: "Logistics Officer",
    description:
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.`,
  },
  {
    id: 4,
    title: "Plant Manager",
    description:
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.`,
  },
  {
    id: 5,
    title: "Plant Manager",
    description:
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.`,
  },
];

type JobDetailsProps = {
  params: { id: string };
};

export default function JobDetails({ params }: JobDetailsProps) {
  const job = jobs.find((j) => j.id.toString() === params.id);
   const router = useRouter();
     const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();

  if (!job) {
    notFound();
  }

  return (
    <div>
    <div className="container mx-auto max-w-7xl pt-40 pb-16 px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* الكول الأول */}
        <div className="flex flex-col justify-start text-start">
            <button
              onClick={() => router.back()}
              className="font-semibold text-[#00A699] underline text-start cursor-pointer mb-5"
            >
                 {t("back-to-career")}
            </button>
          <h1 className="text-4xl font-bold ">{job?.title}</h1>
          <span className="text-[#0066CC] font-bold text-lg block mt-2">
            Full Time
          </span>
          {job?.description.split("\n").map((paragraph, idx) => (
            <p key={idx} className="font-normal text-xl mt-6 max-w-3xlleading-7">
                 {paragraph}
            </p>
            ))}
        </div>

        {/* الكول الثاني */}
        <div className="col-span-1 place-content-center">
  <div className="bg-[#F0F0F0] shadow-[#00000029] rounded-2xl py-6 px-10 max-w-xl mx-auto">
    <h1 className="text-3xl font-bold mb-7 text-center">{t("application")}</h1>
    <form className="flex flex-col gap-4">
      {/* First & Last Name */}
      <div className="flex flex-row justify-center gap-5">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block text-lg font-semibold text-black"
          >
            {t("firstname")}
          </label>
          <input
            type="text"
            id="firstName"
            placeholder={t("firstname")}
            className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-lg font-semibold text-black"
          >
            {t("last-name")}
          </label>
          <input
            type="text"
            id="lastName"
            placeholder={t("last-name")}
            className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
            required
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-5">
    {/* Email */}
      <div className="flex-1">
        <label
          htmlFor="email"
          className="block text-lg font-semibold text-black"
        >
          {t("email-address")}
        </label>
        <input
          type="email"
          id="email"
          placeholder={t("email-address")}
          className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
          required
        />
      </div>

      {/* Phone Number */}
      <div className="flex-1">
        <label
          htmlFor="phone"
          className="block text-lg font-semibold text-black"
        >
          {t("phone-number")}
        </label>
        <input
          type="tel"
          id="phone"
          placeholder={t("phone-number")}
          className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
          required
        />
      </div>
      </div>

            {/* Years of Experience */}
      <div>
        <label
          htmlFor="experience"
          className="block text-lg font-semibold text-black"
        >
          {t("years-of-experience")}
        </label>
        <input
          type="number"
          id="experience"
          placeholder={t("e-g-5")}
          className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
        />
      </div>

      

      {/* Cover Letter */}
      <div>
        <label
          htmlFor="coverLetter"
          className="block text-lg font-semibold text-black"
        >
          {t("cover-letter")}
        </label>
        <textarea
          id="coverLetter"
          rows={4}
          placeholder={t("cover-letter")}
          className="mt-1 block w-full rounded-md bg-white text-[#333] shadow-sm sm:text-sm p-3"
        ></textarea>
      </div>


      {/* Upload CV */}
      <div>
  <label className="block text-lg font-semibold text-black mb-3">
    {t("cv")}
  </label>

  <div>
    <input
      type="file"
      id="cvUpload"
      className="hidden"
    />
    <label
      htmlFor="cvUpload"
      className="inline-block ps-14 py-3 w-48 bg-[#0066CC] text-white font-medium rounded-lg cursor-pointer hover:bg-[#1868b7] transition"
    >
      {t("attach-file")}
    </label>
  </div>
</div>


      {/* Submit Button */}
      <div className="flex justify-center">
      <button
        type="submit"
        className="mt-4 px-6 py-3 w-44 font-semibold bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
      >
        {t("submit")}
      </button>
      </div>
    </form>
  </div>
        </div>

      </div>
    </div>
    </div>
  );
}
