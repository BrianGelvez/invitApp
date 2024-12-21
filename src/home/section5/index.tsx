import { FaWhatsapp } from "react-icons/fa";
import {
  PiNumberCircleOneDuotone,
  PiNumberCircleThreeDuotone,
  PiNumberCircleTwoDuotone,
} from "react-icons/pi";

export default function Section5() {
  return (
    <div className="w-full px-[7vw] py-[10vw]">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full h-auto rounded-xl border-[3px] border-blue-lightBlueishGray shadow-full">
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <PiNumberCircleOneDuotone className="w-16 h-16 text-blue-blueSoftWater" />

              <h2 className="text-2xl font-[600] text-blue-colorText text-center">
                MODELO ESTÁNDAR
              </h2>

              <div className="text-4xl text-blue-colorText font-bold">
                $28.600
              </div>
            </div>
            <div className="w-[50vw] h-[1px] bg-blue-colorText" />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <p className="text-center text-gray-600">
                Confirmación por <span className="font-semibold">WhatsApp</span>{" "}
                para que tus invitados confirmen fácilmente su asistencia, sin
                recopilar su información.
              </p>

              <button className="flex items-center gap-2 px-8 py-3 bg-blue-lightBlueishGray text-white rounded-lg hover:bg-opacity-90 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
                SEÑAR 50%
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl border-[3px] border-blue-lightBlueishGray shadow-full">
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <PiNumberCircleTwoDuotone className="w-16 h-16 text-blue-blueSoftWater" />

              <h2 className="text-2xl font-[600] text-blue-colorText text-center">
                MODELO PREMIUM
              </h2>

              <div className="text-4xl text-blue-colorText font-bold">
                $34.600
              </div>
            </div>
            <div className="w-[50vw] h-[1px] bg-blue-colorText" />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <p className="text-center text-gray-600">
                <span className="font-bold">
                  Sistema de confirmación propio
                </span>{" "}
                que recopila información como alimentación, acompañantes,
                hospedajes, música y más.
              </p>

              <button className="flex items-center gap-2 px-8 py-3 bg-blue-lightBlueishGray text-white rounded-lg hover:bg-opacity-90 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
                SEÑAR 50%
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl border-[3px] border-blue-lightBlueishGray shadow-full">
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <PiNumberCircleThreeDuotone className="w-16 h-16 text-blue-blueSoftWater" />

              <h2 className="text-2xl font-[600] text-blue-colorText text-center">
                MODELO PREMIUM PLUS
              </h2>

              <div className="text-4xl text-blue-colorText font-bold">
                $42.400
              </div>
            </div>
            <div className="w-[50vw] h-[1px] bg-blue-colorText" />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <p className="text-center text-gray-600">
                Además del sistema de confirmación incluye una{" "}
                <span className="font-bold">Trivia interactiva</span> para que
                tus invitados jueguen y respondan preguntas.
              </p>

              <button className="flex items-center gap-2 px-8 py-3 bg-blue-lightBlueishGray text-white rounded-lg hover:bg-opacity-90 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
                SEÑAR 50%
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
