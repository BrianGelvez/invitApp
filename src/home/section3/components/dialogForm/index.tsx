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
          <Dialog.Content className="w-full max-w-lg h-96 bg-blue-colorText/50 backdrop-blur-sm outline outline-offset-1 outline-blue-blueSoftWater text-black flex flex-col justify-start items-center rounded-2xl p-4 m-8 overflow-y-auto">
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
              <p className={`${dancingScript.className} text-[22px] font-extrabold text-blue-lightBlueishGray`}>¡Sé uno de los ganadores!</p>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
