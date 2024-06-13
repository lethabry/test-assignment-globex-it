import phoneImg from '../assets/images/phone.svg';
import mailImg from '../assets/images/mail.svg';
import { IUser } from './UserList';
import { restylePhoneNumber } from '../utils/restylePhoneNumber';

type TypeUserProp = {
  fullName: string;
  phoneNumber: string;
  email: string;
  userData: IUser;
  onOpenPopup: (userData: IUser) => void;
};

export default function UserItem({
  fullName,
  phoneNumber,
  email,
  userData,
  onOpenPopup,
}: TypeUserProp) {
  const correctNumber = restylePhoneNumber(phoneNumber);

  return (
    <li
      className="user-card"
      onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
        onOpenPopup(userData)
      }
    >
      <article>
        <h3 className="user-card__name">{fullName}</h3>
        <ul className="user-card__contacts">
          <li className="user-card__contact">
            <img src={phoneImg} alt="Иконка телефона" />
            <a href={`tel:${correctNumber}`}>{correctNumber}</a>
          </li>
          <li className="user-card__contact">
            <img src={mailImg} alt="Иконка электронной почты" />
            <a href="mailto:yysavchenko@mail.ru">{email}</a>
          </li>
        </ul>
      </article>
    </li>
  );
}
