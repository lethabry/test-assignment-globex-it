type TypeSearchProps = {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ searchValue, handleChange }: TypeSearchProps) {
  return (
    <section>
      <form
        action=""
        className="form"
        method="submit"
        name="search"
        role="search"
      >
        <label htmlFor="search" className="form__label visually-hidden">
          Поиск списка юзеров
        </label>
        <input
          id="search"
          type="search"
          className="form__input"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className="form__button" aria-label="Искать" />
      </form>
    </section>
  );
}
