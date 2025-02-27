import { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import type { PortfolioType } from '@types/Portfolio';

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
              <Dialog.Panel className="flex justify-center items-center flex-col md:flex-row w-full max-w-4xl	transform overflow-hidden p-6 rounded-lg bg-white dark:dark:bg-gray-900 shadow-xl transition-all">
                <img
                  className="w-full md:max-w-sm h-full rounded-lg"
                  src={portfolio?.imgSrc}
                  alt={portfolio?.imgSrcAlt}
                  loading="lazy"
                />
                <div className="w-full md:max-w-lg md:pl-6">
                  <Dialog.Title
                    as="h3"
                    className="mt-5 md:mt-0 dark:text-white font-bold text-2xl md:text-3xl"
                  >
                    {portfolio?.title}
                  </Dialog.Title>

                  <p className="mt-4 dark:text-white text-lg md:text-xl font-bold">Project overview:</p>
                  <Dialog.Description className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-pretty">{portfolio?.description}</Dialog.Description>

                  {portfolio.client && (
                    <>
                    <p className="mt-4 dark:text-white text-lg md:text-xl font-bold">Client:</p>
                    <Dialog.Description className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{portfolio?.client}</Dialog.Description>
                    </>
                  )}

                  <p className="mt-4 dark:text-white text-lg md:text-xl	font-bold">Languges:</p>
                  <Dialog.Description className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{portfolio?.languages}</Dialog.Description>
                  {portfolio?.siteURL && (
                    <>
                      <p className="mt-4 dark:text-white text-lg md:text-xl font-bold">Site:</p>
                      <a className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all underline hover:no-underline hover:text-gray-500" href={portfolio?.siteURL} target="_blank">{portfolio?.siteURL}</a>
                    </>
                  )}

                  {portfolio?.sites && (
                    <>
                      <p className="mt-4 dark:text-white text-lg md:text-xl font-bold">Sites:</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        Brands: <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[0].link} target="_blank">{portfolio.sites[0].name}</a>, <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[1].link} target="_blank">{portfolio.sites[1].name}</a>, <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[2].link} target="_blank">{portfolio.sites[2].name}</a>, <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[3].link} target="_blank">{portfolio.sites[3].name}</a>, <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[4].link} target="_blank">{portfolio.sites[4].name}</a>, <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[5].link} target="_blank">{portfolio.sites[5].name}</a>,
                        and <a className="transition-all underline hover:no-underline hover:text-gray-500" href={portfolio.sites[5].link} target="_blank">{portfolio.sites[6].name}</a>.
                      </p>
                    </>
                  )}

                  {portfolio?.repoURL && (
                    <>
                      <p className="mt-4 dark:text-white text-lg md:text-xl font-bold">Repo:</p>
                      <a className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all underline hover:no-underline hover:text-gray-500" href={portfolio?.repoURL} target="_blank">{portfolio?.repoURL}</a>
                    </>
                  )}
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
