import { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { PortfolioType } from '../types/Portfolio';

type PortfolioModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  portfolio?: PortfolioType;
}

const PortfolioModal = (props: PortfolioModalProps) => {
  const { isOpen, onClose, portfolio } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full p-4 flex items-center justify-center text-left">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex justify-center items-center flex-col md:flex-row w-full max-w-4xl	transform overflow-hidden p-6 rounded-lg bg-white shadow-xl transition-all">
                <img 
                  className="w-full h-full rounded-lg"
                  src={portfolio?.imgSrc} 
                  alt={portfolio?.imgSrcAlt} 
                />
                <div className="md:pl-6">

                  <Dialog.Title
                    as="h3"
                    className="title-gradient title-gradient mt-5 md:mt-0 font-bold text-2xl md:text-3xl"
                  >
                    {portfolio?.title}
                  </Dialog.Title>

                  <p className="mt-4 text-lg md:text-xl	font-bold">Languges:</p>
                  <Dialog.Description className="text-gray-600 text-base md:text-lg">{portfolio?.languages}</Dialog.Description>
                  
                  <p className="mt-4 text-lg md:text-xl font-bold">Site/repo link:</p>
                  <Dialog.Description className="text-gray-600 text-sm md:text-base">{portfolio?.link}</Dialog.Description>
                  
                  <p className="mt-4 text-lg md:text-xl font-bold">Project overview:</p>
                  <Dialog.Description className="text-gray-600 text-base md:text-lg">{portfolio?.description}</Dialog.Description>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
};

export default PortfolioModal;
