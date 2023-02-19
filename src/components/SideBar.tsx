import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCircleUser,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import AddContacts from "./AddContacts";

const SideBar = () => {
  const [newChannelPop, setNewChannelPop] = useState(false);

  const { setUserData, userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className=" bg-base-200 shadow-xl w-fit h-screen flex flex-col">
      <label className="label shadow p-3">
        <span className="label-text text-lg font-bold">Channels</span>
        <button
          className="btn btn-xs btn-square border-none z-0"
          onClick={() => setNewChannelPop(!newChannelPop)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </label>
      <div className=" px-8 py-5 shadow flex-grow">
        <div className="form-control">
          <div className="input-group w-full">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-fit"
            />
            <button className="btn btn-square border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <label className="label p-3 bg-base-300">
        <span className="label-text text-lg font-bold">Channels</span>
        <div className="dropdown dropdown-top dropdown-end">
          <FontAwesomeIcon
            icon={faCaretUp}
            tabIndex={0}
            className=" text-xl cursor-pointer"
          />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <FontAwesomeIcon icon={faCircleUser} />
                My Profile
              </a>
            </li>
            <li>
              <a
                className="text-error"
                onClick={() => {
                  setUserData({ token: null, user: {} });
                  navigate("/signin");
                }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </label>
      {/* poopup */}
      {newChannelPop ? (
        <AddContacts
          setNewChannelPop={setNewChannelPop}
          // newChannelPop={newChannelPop}
          userData={userData}
        />
      ) : null}
    </div>
  );
};

export default SideBar;
