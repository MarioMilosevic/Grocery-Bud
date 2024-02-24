function App() {
  return (
    <>
      <div className="bg-white w-[460px] mx-auto pt-8 pb-10 px-8">
      <h1 className="pb-4 text-2xl">Grocery Bud</h1>
    <div className="flex justify-between rounded-lg">
      <input className="bg-slate-100 w-[70%] px-2 text-sm rounded-md" type="text" />
      <button className="w-[30%] bg-blue-300 text-white text-sm py-1 rounded-md">Add Item</button>
    </div>
      </div>
    </>
  );
}

export default App;
