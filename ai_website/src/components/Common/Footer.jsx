import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark-card p-4 text-center border-t border-dark-border">
      <p className="text-sm">© {new Date().getFullYear()} Critical Event Manager. All rights reserved.</p>
    </footer>
  )
}

export default Footer
