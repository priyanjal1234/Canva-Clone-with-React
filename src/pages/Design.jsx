import React from 'react'
import DesignLeft from '../components/DesignLeft'
import DesignRight from '../components/DesignRight'

const Design = () => {
  return (
    <main className='flex w-full min-h-screen bg-[#dbdee3]'>
        <DesignLeft />
        <DesignRight />
    </main>
  )
}

export default Design
