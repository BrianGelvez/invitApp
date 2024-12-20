import { anton } from "@/app/fonts";
import Image from "next/image";

export default function Section4() {
  return (
    <div
      className="w-full h-auto bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/fondoAbsolute.webp')`,
      }}
    >
      {/* Capa negra semitransparente */}
      <div className="absolute inset-0 bg-blue-colorText/50 backdrop-sepia backdrop-blur-sm"></div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 flex flex-col  text-white h-full p-[5vw]">
        <p className={`${anton.className} text-[35px] py-4 text-center`}>
          ¿QUÉ INCLUYEN NUESTRAS{" "}
          <span className="italic text-blue-lightPastelBlue/70">
            INVITACIONES?
          </span>
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/correo.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              CONFIRMACIÓN PROPIA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Los invitados podrán confirmar su asistencia desde la invitación.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/trivia.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              TRIVIA INTERACTIVA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Para que tus invitados jueguen respondiendo preguntas
              personalizadas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/cena.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              INVITADOS A CENA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Podras diferencias invitados a cena y después de 00:00 hs.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/tiempo.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              CUENTA REGRESIVA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Emocionante cuenta regresiva al inicio de la invitacion en tiempo
              real.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/ubicacion.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              MAPAS Y UBICACION
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Los invitados llegarán sin complicaciones el dia del evento.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/bienvenida.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              BIENVENIDA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Una pantalla de bienvenida previo al ingreso de la invitación.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/mezclador.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              MUSICA SUGERIDA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Los invitados podrán sugerir canciones infaltables en tu fiesta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
