import { anton } from "@/app/fonts";
import Image from "next/image";

export default function Section4() {
  return (
    <div className="w-full bg-blue-colorText">
      <div className="w-full flex flex-col justify-center items-center">
        <p className={`${anton.className} text-[35px] py-4 text-center`}>
          ¿QUÉ INCLUYEN NUESTRAS <span className="italic">INVITACIONES?</span>
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Image
            src="/correo.gif"
            width={1000}
            height={1000}
            alt="Gif correo"
            className="w-[100px]"
          />
          <p>CONFIRMACION PROPIA</p>
        </div>
      </div>
    </div>
  );
}
