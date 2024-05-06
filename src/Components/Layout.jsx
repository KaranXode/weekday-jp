import React from 'react'
import Header from './Header';
import JobsPage from './jobPage';

function Layout() {
  return (
    <div>
      <Header />
      <div className='main'>
        <JobsPage/>
      </div>

    </div>
  )
}

export default Layout