import { anton } from "@/app/fonts";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="relative w-full h-[65vh] flex justify-center items-center">
      {/* Video con filtro para oscurecer */}
      <video
        src="/videoInicio.mp4"
        className="w-full h-full object-cover brightness-50"
        autoPlay
        muted
        loop
      />

      {/* Contenido encima del video */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 absolute text-white">
        <div className="w-[50vw]">
          <Image
            src="/invitAppLogo.webp"
            width={1000}
            height={1000}
            alt="Logo invitApp"
            className="w-[]"
          />
        </div>
        <div className="w-full px-4 flex flex-col justify-center items-center gap-2">
          <p className={`text-[16px] font-[600] text-blue-lightBlueishGray/70`}>
            INVITAPP - INVITACIONES WEB
          </p>
          <p
            className={`${anton.className} font-[100] text-[35px] leading-[38px] text-center`}
          >
            UN BUEN{" "}
            <span className="text-blue-lightBlueishGray/70 italic">EVENTO</span>{" "}
            <span className="">COMIENZA</span> CON UNA BUENA{" "}
            <span className="text-blue-lightBlueishGray/70 italic">
              INVITACION
            </span>
          </p>
          <p className="text-[12px]">SORPRENDÉ A TUS INVITADOS</p>
        </div>
      </div>
    </div>
  );
}
