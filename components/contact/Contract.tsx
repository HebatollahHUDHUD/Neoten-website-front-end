import Image from "next/image";
import { useTranslations } from "next-intl";
const Contact = () => {
  const t = useTranslations();
    return(
        <section className="my-14">
            <p className="font-semibold text-[#00A699] text-sm text-center uppercase">ALWAYS AHEAD</p>
            <h1 className="font-bold text-3xl text-center uppercase pt-2">Get in Touch</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-14 lg:gap-10 pt-7 pb-14 order-2 md:order-1">
                      <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
                      <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
                        <Image
                        src="/Path 291.svg"
                        alt="call"
                        width={28}
                        height={20}
                        quality={100}
                        className="object-contain"
                         />
                      </div>
                      <div className="flex flex-col items-center pt-5">
                      <p className="font-medium text-lg">{t("phone-number")}</p>
                      <p className="font-normal text-sm">0790000000</p>
                      </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
                      <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
                        <Image
                        src="/Path 292.svg"
                        alt="call"
                        width={28}
                        height={20}
                        quality={100}
                        className="object-contain"
                         />
                      </div>
                      <div className="flex flex-col items-center pt-5">
                      <p className="font-medium text-lg">{t("email-address")}</p>
                      <p className="font-normal text-sm">Info@newton.com</p>
                      </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
                      <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
                        <Image
                        src="/Path 290.svg"
                        alt="call"
                        width={28}
                        height={20}
                        quality={100}
                        className="object-contain"
                         />
                      </div>
                      <div className="flex flex-col items-center pt-5">
                      <p className="font-medium text-lg">{t("location")}</p>
                      <p className="font-normal text-sm">Amman, Jordan</p>
                      </div>
                      </div>
            </div>
            <div className="max-w-3xl mx-auto h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.37153444943!2d35.88110667542481!3d31.964934674013648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1bdcf1dd593%3A0x4b4acc2efaf710dc!2sHUDHUD%20Information%20Technology!5e1!3m2!1sen!2sjo!4v1758444371152!5m2!1sen!2sjo"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </section>
    );
}
export default Contact;