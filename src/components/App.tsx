import { useState } from 'react';
import InfoPopup from './InfoPopup';
import Search from './Search';

import UserList, { IUser } from './UserList';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  const [isPopupOpen, setIsOpenPopup] = useState(false);
  const [userDataForPopup, setUserDataForPopup] = useState<IUser | null>(null);

  const handleOpenPopup = (userData: IUser) => {
    setIsOpenPopup(!isPopupOpen);
    setUserDataForPopup(userData);
  };

  const closePopup = () => setIsOpenPopup(false);

  return (
    <main className="main">
      <Search searchValue={searchValue} handleChange={handleChange} />
      <UserList inputValue={searchValue} onOpenPopup={handleOpenPopup} />
      <InfoPopup
        userData={userDataForPopup}
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
      />
    </main>
  );
}

export default App;
