import { useState } from 'react'
import { Header, Footer, Modal, Participant } from './component'
function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  return (
    <main className='h-screen bg-secondary'>
      <div className='w-full fixed top-0 z-20'>
        <Header onOpenModal={openModal} />
      </div>
      <div className='w-full h-full px-10 py-[105px]'>
        <div className='bg-white h-full shadow-sm py-8 px-14'>
          <Participant />
        </div>
      </div>
      <div className='w-full fixed bottom-0 z-20'>
        <Footer />
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </main>
  )
}

export default App
