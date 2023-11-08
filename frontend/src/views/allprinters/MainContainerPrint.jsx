import React from 'react'

export default function MainContainerPrint({children}) {
  const mode =  "ModeLight"
  return (
    <section className={"GM__"+mode+"__container-print"}>{children}</section>
  )
}
