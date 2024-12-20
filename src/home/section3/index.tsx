import { anton } from "@/app/fonts";
import Image from "next/image";
import DialogForm from "./components/dialogForm";

export default function Section3() {
  return (
    <div className="w-full flex flex-col bg-white">
      <div
        className="w-full flex flex-col gap-10 justify-center items-center bg-blue-lightPastelBlue 
                      p-[8vw] border-blue-blueSoftWater border-y-[2px]"
      >
        <div className="bg-white rounded-xl shadow-full w-[90vw] max-w-4xl h-auto p-[4vw] text-center">
          <p
            className={`${anton.className} text-[70px] text-blue-blueSoftWater`}
          >
            CLIENTES
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-1 mt-4">
            <Image
              src="/gift.webp"
              width={1000}
              height={1000}
              alt="Regalo Gratis invitacion"
              className="w-[25vw]"
            />

            <div className="w-full flex flex-col justify-center items-center">
              <p
                className={`${anton.className} text-[25px] text-blue-colorText`}
              >
                Regalo de Inauguración
              </p>
              <p className="text-blue-colorText text-[20px] font-[600]">
                ¡Participa y haz realidad tu invitación soñada!
              </p>
              <p className="mt-8 text-blue-colorText font-[600]">
                En <span className="font-[700] text-[18px]">invitApp</span>,
                creemos que cada invitación cuenta una historia única, la tuya.
                Por eso,{" "}
                <span className="font-[800]">
                  queremos regalar 3 invitaciones
                </span>{" "}
                personalizadas para los primeros clientes que confíen en
                nosotros.{" "}
                <span className="font-[800]">Llena el formulario</span> y
                participa por una invitación totalmente gratuita para tu evento
                especial. Nos encargaremos de cada detalle con pasión y
                compromiso, porque entendemos que cada momento merece ser
                inolvidable.
              </p>
            </div>
          </div>
          <DialogForm />
        </div>
      </div>
          <div className="py-4 flex justify-center items-center">
              <Image src="/bannerHeart.webp" width={1000} height={1000} alt="Banner corazon" className="w-[90vw]"/>
            </div>
    </div>
  );
}
