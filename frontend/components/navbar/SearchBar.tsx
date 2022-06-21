import { SearchIcon } from "@heroicons/react/solid";
import useSearchBar from "hooks/useSearchBar";

function SearchBar({ className }: { className: string }) {
  const { term, termHandler, submitHandler } = useSearchBar();

  return (
    <form className={className} onSubmit={submitHandler}>
      <input
        className="field w-full py-0 border-r-0 rounded-r-none"
        placeholder="Wyszukaj produkt..."
        value={term}
        onChange={termHandler}
      />
      <button
        className={
          "flex items-center justify-center aspect-square p-2 btn-brand rounded-l-none " +
          (term ? "cursor-pointer" : "hover:bg-brand cursor-not-allowed")
        }
        disabled={term ? false : true}
      >
        <SearchIcon className="w-4 h-4 text-white" />
      </button>
    </form>
  );
}

export default SearchBar;
