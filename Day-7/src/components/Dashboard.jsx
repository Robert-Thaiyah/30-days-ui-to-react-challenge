import React from 'react'
import Sidenav from './Sidenav'
import Additional from './Additional'
import Topnav from './Topnav'
import Content from './Content'

const Dashboard = () => {
  return (
    <div >
        
<div class="flex w-screen h-screen text-gray-700">
            <div class="">
                <Sidenav />
            </div>
            <div class="">
               <Additional /> 

            </div>
            <div class="flex flex-col flex-grow">
                <Topnav />
                <Content />
            </div>
</div>
    </div>
  )
}

export default Dashboard