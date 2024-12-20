"use client";

import { dancingScript } from "@/app/fonts";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function DialogForm() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="pt-6">
        <p
          className={`border-[2px] px-8 py-1 font-[600] text-[16px] rounded-xl border-blue-lightBlueishGray
                     text-blue-blueSoftWater `}
        >
          Participar ahora
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 z-[60] fixed bg-black/70 overflow-y-auto flex justify-center items-center">
          <Dialog.Content
            className="w-full h-[500px] bg-blue-colorText/50 backdrop-blur-sm outline outline-offset-1
                                   outline-blue-blueSoftWater text-black flex flex-col justify-start items-center
                                    rounded-2xl p-4 m-8 overflow-y-auto"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IoClose className="size-8 text-transparent" />
              </div>
              <Image
                src="/invitAppLogo.webp"
                width={1000}
                height={1000}
                alt="InitApp Logo"
                className="w-[100px]"
              />
              <Dialog.Close asChild title="Close">
                <IoClose className="size-8 text-white" />
              </Dialog.Close>
            </div>
            <div className="w-full flex justify-center items-center mt-2">
              <p
                className={`${dancingScript.className} text-[22px] font-extrabold text-blue-lightBlueishGray`}
              >
                ¡Sé uno de los ganadores!
              </p>
            </div>
            <form
              className="w-full mt-4 flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Datos personales */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Teléfono de contacto
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Opcional"
                />
              </div>
              {/* Detalles del evento */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="eventType"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Tipo de evento
                </label>
                <select
                  id="eventType"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="cumpleaños">Cumpleaños</option>
                  <option value="boda">Boda</option>
                  <option value="bautizo">Bautizo</option>
                  <option value="graduación">Graduación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="eventDate"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Fecha del evento
                </label>
                <input
                  type="date"
                  id="eventDate"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="eventLocation"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Ubicación del evento
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Opcional"
                />
              </div>
              {/* Preferencias de diseño */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="theme"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Temática o estilo deseado
                </label>
                <input
                  type="text"
                  id="theme"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Ej. Elegante, Minimalista"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="colors"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Colores preferidos
                </label>
                <input
                  type="text"
                  id="colors"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Ej. Azul, Dorado"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="music"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Música o canción de fondo
                </label>
                <input
                  type="text"
                  id="music"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Opcional"
                />
              </div>
              {/* Participación y autorización */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="reason"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  ¿Por qué quieres ganar esta invitación?
                </label>
                <textarea
                  id="reason"
                  className="border-b-[2px] border-blue-blueSoftWater bg-transparent focus:ring-0 focus:outline-none"
                  placeholder="Comparte tu motivación brevemente"
                  rows={3}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-4 h-4"
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] font-semibold text-blue-lightBlueishGray"
                >
                  Autorizo el uso de mi testimonio e invitación en redes
                  sociales.
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-blueSoftWater text-white font-bold py-2 rounded-lg hover:bg-blue-lightBlueishGray transition"
              >
                Enviar formulario
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
