import { useEffect, useState } from 'react';
import { getUserData } from '../utils/api';
import UserItem from './UserItem';

export interface IUser {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

type TypeUserList = {
  inputValue: string;
  onOpenPopup: (userData: IUser) => void;
};

export default function UserList({ inputValue, onOpenPopup }: TypeUserList) {
  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    getUserData(inputValue).then((users) => setUserData(users));
  }, [inputValue]);

  return (
    <section className="list">
      <ul className="user-list">
        {userData.map((el, index) => {
          return (
            <UserItem
              key={index}
              fullName={el.name}
              phoneNumber={el.phone}
              email={el.email}
              userData={el}
              onOpenPopup={onOpenPopup}
            />
          );
        })}
      </ul>
    </section>
  );
}
