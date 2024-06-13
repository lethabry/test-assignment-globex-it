import { IUser } from './UserList';
import { restylePhoneNumber } from '../utils/restylePhoneNumber';
import { useEffect, useRef } from 'react';

export default function InfoPopup({
  userData,
  isPopupOpen,
  closePopup,
}: {
  userData: IUser | null;
  isPopupOpen: boolean;
  closePopup: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isPopupOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isPopupOpen]);

  if (!userData) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className="popup"
      aria-label="Дополнительная информация по пользователю"
    >
      <h3 className="popup__name">{userData.name}</h3>
      <button
        className="popup__button"
        type="button"
        aria-label="закрыть"
        onClick={closePopup}
      />
      <table className="popup__table">
        <tbody>
          <tr>
            <th className="table-column">Телефон:</th>
            <th className="table-row">{restylePhoneNumber(userData.phone)}</th>
          </tr>
          <tr>
            <th className="table-column">Почта:</th>
            <th className="table-row">{userData.email}</th>
          </tr>
          <tr>
            <th className="table-column">Дата приема:</th>
            <th className="table-row">{userData.hire_date}</th>
          </tr>
          <tr>
            <th className="table-column">Должность:</th>
            <th className="table-row">{userData.position_name}</th>
          </tr>
          <tr>
            <th className="table-column">Подразделение:</th>
            <th className="table-row">{userData.department}</th>
          </tr>
        </tbody>
      </table>

      <div>
        <h4 className="popup__additional">Дополнительная информация:</h4>
        <p className="popup__text">
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </dialog>
  );
}
