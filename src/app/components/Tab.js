export default function Tab() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 border-b-2 border-gray-200 p-3 ">
        <h2 className="cursor-pointer text-xl font-normal">Overview</h2>
        <h2 className="cursor-pointer text-xl font-normal">Resources</h2>
        <h2 className="cursor-pointer text-xl font-normal">Learning Tools</h2>
      </div>
      <div>
        <h1 className="my-5 text-2xl font-bold">About Course</h1>
        <p className="text-base">
          Welcome to the chain.ed beginner's JavaScript course! In this article
          we will look at JavaScript from a high level, answering questions such
          as "What is it?" and "What can you do with it?", and making sure you
          are comfortable with JavaScript's purpose. JavaScript is a scripting
          or programming language that allows you to implement complex features
          on web pages — every time a web page does more than just sit there and
          display static information for you to look at — displaying timely
          content updates, interactive maps, animated 2D/3D graphics, scrolling
          video jukeboxes
        </p>
      </div>
    </div>
  );
}
