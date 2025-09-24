import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Contact = () => {
  const t = useTranslations();
    return(
        <section className="my-14">
            <p className="font-semibold text-[#00A699] text-sm text-center uppercase">{t("always")}</p>
            <h1 className="font-bold text-3xl text-center uppercase pt-2">{t("get")}</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-14 lg:gap-10 pt-7 pb-14 order-2 md:order-1">
            <Link
              href="tel:+962 7 9878 5992"
              className="flex flex-col gap-2 place-items-center"
            >
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
                      <p className="font-normal text-sm">+962 7 9878 5992</p>
                      </div>
                      </div>
                      </Link>
                      <Link
                        href="mailto:info@newtonlogistics.com"
                        className="flex flex-col gap-2 place-items-center"
                      >
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
                      <p className="font-normal text-sm">info@newtonlogistics.com</p>
                      </div>
                      </div>
                      </Link>
                      <Link
                        href="https://www.google.com/maps/place/Newton+Logistics/@31.9845278,35.881986,739m/data=!3m2!1e3!4b1!4m6!3m5!1s0x151ca03b75b7d869:0xb4ba8fa829db108f!8m2!3d31.9845279!4d35.8868569!16s%2Fg%2F1q6jzc94h?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-2 place-items-center"
                      >
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
                      <p className="font-normal text-sm">Jordan - Amman</p>
                      </div>
                      </div>
                      </Link>
            </div>
            <div className="max-w-3xl mx-auto h-[450px] px-2 md:px-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.684780583366!2d35.8868569!3d31.9845279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca03b75b7d869%3A0xb4ba8fa829db108f!2sNewton%20Logistics!5e1!3m2!1sen!2sjo!4v1758711119631!5m2!1sen!2sjo"               className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}
export default Contact;