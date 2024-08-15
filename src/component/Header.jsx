import { FiUsers } from 'react-icons/fi'

const Header = ({ onOpenModal, isModalOpen }) => {
  return (
    <div className='bg-white w-full py-6 px-14 font-inter h-24 box-border'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2.5'>
          <img src='/asset/logo.png' className='w-[144px] h-12' alt='Logo' />
          <div className='border-l border-darkGray px-3'>
            <h3 className='text-darkText text-lg font-medium'>
              Lagos State Tech Summit 2023
            </h3>
            <p className='font-medium text-sm text-liteText mt-1.5'>
              June 12th, 2023
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <button className='border border-darkerGray rounded-xl px-5 py-4 flex items-center space-x-2.5 h-12 box-border'>
            <img
              src='/asset/record.png'
              className='w-[22px] h-[22px]'
              alt='record-icon'
            />
            <span className='text-base font-semibold text-darkerGray'>
              Start Recording
            </span>
          </button>
          {/* participant button */}
          <button
            onClick={onOpenModal}
            className={`${
              isModalOpen
                ? 'border-none text-white bg-primary'
                : 'border border-darkerGray text-darkerGray hover:border-none hover:text-white hover:bg-primary'
            } rounded-xl px-3 py-2 flex items-center space-x-2.5 h-12 box-border transition-colors ease-in-out duration-700`}
          >
            <FiUsers className='text-2xl' />
            <span className='text-base font-semibold'>5</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
