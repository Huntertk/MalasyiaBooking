import React, { useState } from 'react'

const SidebarNavlinks = ({data, modalOpen}) => {
    const [isLinkOpen, setIsLinkOpen] = useState(false
        )
  return (
    <div className={modalOpen ? "links modalClose":" links modalOpen"}>
                  {
                    data.map((linkData) => {
                      return (
                          <a 
                          href={linkData.link} 
                          target='_blank' 
                          key={linkData.id}>
                            {linkData.linkTitle}
                          </a>
                      )
                    })
                  }
                </div>
  )
}

export default SidebarNavlinks