function NoProductsMsg({ term }: { term: string }) {
  return (
    <div className="container py-12">
      <h1 className="text-5xl font-bold">
        Nie znaleziono produktów dla
        <span className="text-brand"> &quot;{term}&quot;.</span>
      </h1>
      <p className="mt-4 text-xl text-accent-light">
        Upewnij się, że wszystkie słowa zostały zapisane poprawnie lub spróbuj
        wpisać inne słowa kluczowe.
      </p>
    </div>
  );
}

export default NoProductsMsg;
