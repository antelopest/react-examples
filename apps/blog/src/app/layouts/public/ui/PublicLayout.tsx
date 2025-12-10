export const PublicLayout = ({ children }) => {
  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <header className="w-full border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex">
            <h1 className="">My App</h1>
            <input type="text"></input>
            <button className="bg-dark rounded-lg" type="button">Log In</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  );
};