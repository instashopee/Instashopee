import React, { useEffect } from 'react'

const admin_all_orders = () => {
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }

  
  }, []);
  return (
    <div className='min-h-screen'>admin_all_orders</div>
  )
}

export default admin_all_orders