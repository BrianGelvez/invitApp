import { anton } from "@/app/fonts";
import Image from "next/image";

export default function Section4() {
  return (
    <div
      className="w-full bg-cover bg-center relative border-y-[2px] border-blue-blueSoftWater"
      style={{
        backgroundImage: `url('/fondoAbsolute2.webp')`,
      }}
    >
      {/* Capa negra semitransparente */}
      <div className="absolute inset-0 bg-blue-colorText/70  backdrop-blur-sm"></div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 flex flex-col  text-white p-[5vw]">
        <p className={`${anton.className} text-[35px] py-4 text-center`}>
          ¿QUÉ INCLUYEN NUESTRAS{" "}
          <span className="italic text-blue-lightPastelBlue/70">
            INVITACIONES?
          </span>
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-6">
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
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/diamante.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              CÓDIGO DE VESTIMENTA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Informa a tus invitados el código o estilo de vestimenta elegido.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/camara.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              MURO DE INSTAGRAM
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Un hashtag para que tus invitados publiquen sus fotos en redes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/valorTarjeta.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              VALOR TARJETA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Tus invitados podrán abonar la invitación en caso de que se
              solicite.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/regalo.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              SECCIÓN REGALOS
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Tus invitados podrán hacerte llegar sus regalos con facilidad.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/albunFotos.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              ÁLBUM DE FOTOS
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Podrás rememorar recuerdos y momentos con tus invitados.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/musicaFondo.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              MUSICA DE FONDO
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              La cancion que elijas sonará de fondo en tu invitacion web.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/historia.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              SECCIÓN EMOTIVA
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Un apartado para darle tu toque emotivo a tu evento.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/padrinos.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              PADRINOS
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Destaca a las personas claves que forman parte de tu celebración.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/hotel.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              HOSPEDAJES
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Información y ociones de alojamiento para tus invitados.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/auto.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              TRASLADOS
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Información y opciones de traslados para tus invitados.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/codigoQr.gif"
              width={1000}
              height={1000}
              alt="Gif correo"
              className="w-[100px]"
            />
            <p className={`${anton.className} text-[45px] leading-[50px]`}>
              QR DE FOTOS
            </p>
            <p className="mt-4 text-blue-lightPastelBlue">
              Podras vincular cualquier App para que tus invitados publiquen las
              fotos del evento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
