import React from 'react'

export default function MainContentCurse({children}) {
  const mode =  "ModeLight"
  return (
    <main className={"GM__"+mode+"__content-curse"}>{children}</main>
  )
}
