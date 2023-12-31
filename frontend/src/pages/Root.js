import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom'; 
import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css'

const Root = () => {
  // const navigation = useNavigation();
  return (
    <div>
       <MainNavigation />
       <main className={classes.content}>
        {/* {navigation.state === 'loading' && <p>Loading....</p>} */}
       <Outlet />
       </main>
    </div>
  )
}

export default Root
