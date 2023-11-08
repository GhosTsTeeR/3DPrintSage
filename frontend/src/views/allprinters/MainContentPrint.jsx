import React from 'react'

export default function MainContentPrint({children}) {
  const mode =  "ModeLight"
  return (
    <main className={"GM__"+mode+"__content-print"}>{children}</main>
  )
}
