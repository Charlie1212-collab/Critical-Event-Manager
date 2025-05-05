// Modal component
import React from 'react'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-dark-card p-4 rounded-lg">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
