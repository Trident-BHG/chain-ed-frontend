export default function Tab({ videoDescription }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 border-b-2 border-gray-200 p-3 ">
        <h2 className="cursor-pointer text-xl font-normal">Overview</h2>
        <h2 className="cursor-pointer text-xl font-normal">Resources</h2>
        <h2 className="cursor-pointer text-xl font-normal">Learning Tools</h2>
      </div>
      <div>
        <h1 className="my-5 text-2xl font-bold">About Course</h1>
        <p className="text-base">{videoDescription}</p>
      </div>
    </div>
  );
}
