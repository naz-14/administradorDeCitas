import React from 'react'

import './pageTitle.scss'

interface PageTitleProps {
  title: string
}

const PageTitle = ({ title }:PageTitleProps) => {
  return (
    <div className="page-title__wrapper">
      <h1 className="page-title title">{title}</h1>
    </div>
  )
}

export default PageTitle
