import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";

const Messenger = () => {
  return (
    <section className="flex flex-col h-full ">
      <label className="label shadow-md p-3 flex justify-center items-center">
        <span className="label-text text-lg font-bold">Chat Name</span>
      </label>
      <div className="mt-10 overflow-y-auto flex-auto h-0 mx-20">
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
        {<Message />}
      </div>
      <div className="form-control px-20 my-10">
        <label className="input-group w-ful flex">
          <input
            type="text"
            placeholder="Type a message here"
            className="input input-bordered flex-grow"
          />
          <button className="btn bg-primary border-none">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </label>
      </div>
    </section>
  );
};

export default Messenger;
