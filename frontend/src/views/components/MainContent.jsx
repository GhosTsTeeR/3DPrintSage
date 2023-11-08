import React from 'react'

export default function MainContent({children}) {
  const mode =  "ModeLight"
  return (
    <main className={"GM__"+mode+"__content"}>{children}</main>
  )
}
