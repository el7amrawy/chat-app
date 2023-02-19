import { useState, useRef, SyntheticEvent } from "react";
import axios from "axios";
import config from "../config";
import { UserData } from "../context/UserProvider";

type AddContactsProps = {
  setNewChannelPop: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserData;
};

const AddContacts = (props: AddContactsProps) => {
  const { setNewChannelPop, userData } = props;
  //
  const [popTab, setPopTab] = useState("contact");
  const [contactForm, setContactForm] = useState({
    contact_username: "",
  });

  const popRef = useRef(null);

  const clickHandler = (ev: SyntheticEvent) => {
    const tabs = document.querySelectorAll("div.tabs a.tab");
    tabs.forEach((tab) => {
      if (tab === ev.target) {
        tab.classList.add("tab-active");
      } else {
        tab.classList.remove("tab-active");
      }
    });
    setPopTab(
      (ev.target as HTMLElement).innerText.split(" ")[1].toLocaleLowerCase()
    );
  };

  const submitHandler = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (popTab === "contact") {
      try {
        const { data } = await axios.post(
          config.apiHost + "/users/" + userData.user.username + "/contacts",
          { contact: contactForm },
          {
            headers: {
              Authorization: `auth ${userData.token}`,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div
      className="absolute left-0 top-0 flex justify-center items-center h-screen w-screen bg-[#0000006e] z-50"
      ref={popRef}
      onClick={(ev) => {
        if (ev.target === popRef.current) setNewChannelPop(false);
      }}
    >
      <form className="bg-base-200 p-7 rounded-3xl" onSubmit={submitHandler}>
        <div className="tabs tabs-boxed">
          <a
            className="tab font-bold capitalize tab-active"
            onClick={clickHandler}
          >
            new contact
          </a>
          <a className="tab font-bold capitalize" onClick={clickHandler}>
            new channel
          </a>
        </div>
        {popTab === "contact" ? (
          <div className="form-control w-[500px]">
            <input
              type="text"
              required
              placeholder="username"
              value={contactForm.contact_username}
              onChange={(ev) =>
                setContactForm({ contact_username: ev.target.value })
              }
              className=" bg-base-100 px-4 py-3 mt-6 rounded-lg"
            />
            <div className=" flex justify-end w-full mt-5">
              <button className="btn btn-primary w-fit capitalize">add</button>
            </div>
          </div>
        ) : (
          <div className="form-control w-[500px]">
            <input
              type="text"
              placeholder="Channel name"
              required
              className=" bg-base-100 px-4 py-3 mt-6 rounded-lg"
            />
            <textarea
              placeholder="Channel Description"
              required
              className="bg-base-100 px-4 py-3 mt-6 rounded-lg resize-none h-28"
            />
            <div className=" flex justify-end w-full mt-5">
              <button className="btn btn-primary w-fit capitalize">add</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddContacts;
