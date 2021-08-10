import React from 'react'
import Image from 'next/image'
import { Modals } from '../types/componentProps'

const Modal: React.FC<Modals> = ({ isOpen, closeModal }) => {
  return (
    <div className={[!isOpen && 'hidden'].join('')}>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:px-5 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="flex justify-between">
                    <h3
                      className="text-xl leading-6 font-semibold text-gray-900"
                      id="modal-title"
                    >
                      Detail Ketentuan
                    </h3>
                    <div
                      className="modal-close cursor-pointer z-50"
                      onClick={closeModal}
                    >
                      <svg
                        className="fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="my-8">
                    <p className="text-sm text-gray-500">
                      ​​Seluruh program Aksi Peduli #TemanHijrah (APTH)
                      didedikasikan bagi pasien yang terpapar Covid-19 dan
                      sedang menjalani isolasi mandiri. Berikut adalah cakupan
                      wilayah untuk masing-masing program:
                    </p>
                    <table className="text-sm text-gray-500 mt-2">
                      <tbody>
                        <tr>
                          <td className="w-1/2">Program Catering</td>
                          <td>: Seluruh wilayah Indonesia</td>
                        </tr>
                        <tr>
                          <td className="w-1/2">Program Obat</td>
                          <td>: Jabodetabek</td>
                        </tr>
                        <tr>
                          <td className="w-1/2">Program Oksigen</td>
                          <td>: Jabodetabek</td>
                        </tr>
                        <tr>
                          <td className="w-1/2">Program Telerehab</td>
                          <td>: Seluruh wilayah Indonesia</td>
                        </tr>
                        <tr>
                          <td className="w-1/2">Program Ambulans</td>
                          <td>: Jabodetabek</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="text-sm text-gray-500 mt-2">
                      Syarat dan ketentuan untuk mengikuti program APTH adalah
                      sebagai berikut:
                    </p>
                  </div>
                  <div className="text-center mb-12 w-full h-40 sm:h-96 relative">
                    <Image
                      layout="fill"
                      alt="ikon"
                      src="/img/detail.png"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
