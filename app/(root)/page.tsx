import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';


const Home = () => {
  const loggedIn = { firstName: 'Markees', lastName: 'Fuller', email: 'contact@marsansolutionsllc.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."/>
        
            <TotalBalanceBox
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
               />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 210.50}, {
        currentBalance: 643.12}]}
      />
    </section>
  )
}

export default Home