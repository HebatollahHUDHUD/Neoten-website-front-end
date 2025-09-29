"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { usePostData } from "@/hooks/useFetch";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

const ContactForm = ({ inService }: { inService?: boolean }) => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, submitCount },
  } = useForm<any>();

  const { mutateAsync } = usePostData<any>({
    endpoint: "/contact",
  });

  const onSubmit = async (values: any) => {
    const res = (await mutateAsync(values)) as any;

    if (res.status === "success") {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="px-2 md:px-0 mt-8">
      <section
        className={cn(
          "mb-14 max-w-3xl mx-auto  shadow-[#00000029] rounded-2xl py-8 px-10",
          inService ? "bg-[#E7EDF4]" : "bg-[#E6F4F2]"
        )}
      >
        <h1 className="font-bold text-3xl text-center uppercase ">
          {inService ? t("eager") : t("share")}
        </h1>
        {/* <p className="font-semibold text-[#666666] text-sm text-center max-w-lg mx-auto pt-3">
            {t("ff")}
            </p> */}
        <form
          key={submitCount}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-5"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-lg font-bold text-black"
            >
              {t("full-name")}
            </label>
            <input
              type="text"
              placeholder={t("full-name")}
              {...register("name", { required: "name-required" })}
              className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold text-black"
            >
              {t("email-address")}
            </label>
            <input
              type="email"
              placeholder={t("email-address")}
              {...register("email", { required: "email-required" })}
              className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-lg font-bold text-black"
            >
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              placeholder={t("subject")}
              {...register("subject", { required: "subject-required" })}
              className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-bold text-black"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              placeholder={t("message")}
              rows={4}
              {...register("message", { required: "message-required" })}
              className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-44 bg-[#0066CC] text-white py-2 px-4 rounded-md hover:bg-gray-800 transition cursor-pointer items-center disabled:opacity-70"
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default ContactForm;
