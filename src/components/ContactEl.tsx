import { Contact } from "./SideBar";
import { Dispatch } from "react";

type ContactElProps = {
  contact: Contact;
  currentChat: Contact;
  setCurrentChat: Dispatch<React.SetStateAction<Contact>>;
};

const ContactEl = (props: ContactElProps) => {
  const { contact, currentChat, setCurrentChat } = props;

  const clickHandler = () => {
    setCurrentChat(contact);
  };
  return (
    <div
      className="flex cursor-pointer rounded p-4 hover:bg-base-100 active:bg-primary"
      onClick={clickHandler}
    >
      <div className=" w-11 h-11 rounded-lg overflow-hidden">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEX/Vlv/iIv/////T1T/Q0n/m57/oaP/+/z/gYT/S1H/U1j/3+D/jZD/29z/kZT/hon/wsP/srT/foH/bHD/t7n/z9D/1NX/x8j/ZGj/XmP/Nz7/9fX/6Oj/QEb/7+//v8H/dnr/rrD/nZ//Lzf/qKr/eXz/lph3kxfHAAAErUlEQVR4nO2dbZOaPBSGIbzFAKIBRFfEl0f5/z/xOQnoOq0z667ptAfv68MObWcz5OpJyEpyr+cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgSzK+qfbfEPE8ybxUBTurnlILq1uOYhYbYUVwo3dzxrbi06svqnuXMgHTlYcHTQVtVyK4SeBS4IyUFKLfJy0OxmH50Qy8gJfS5ERS0mvBzMvLATLqmoRWZ18BH+59bBklrk5WAkXRF1nVz/vG3TJ2i3twbq2rSw+tTJz8ElnM0+ytZet4uT1PIptIz2wzd1hw9aGO327BxUtzsulAqH+28yLQv/aQqps2FRsAgVw/WBtynLDZX/oSw9Fdj/z0bK5/t/RUrb9VYpb10e6IraLf92355GqR05WAcq8MzQbrMfGLAWMmNwu1Ge2tDFTikmVWAJjQO6Y6Og0d8YBL+gTSkkG2UdhH+7V99jcDAz8/lS/9iAkXA0lRCwdbBb0Y0ffzgOrkgjId8xdbCJ6b6rFxWQBPOYOSueDkq67dVLA2FAm3IqeTpIaSC/XAVWwtY2xtEBEf/8iXBHEQ/rI5YOUgcjwaBTvg4iJ2VAhdCzddA6KgMqhJarg8pRGVAhLLk6cKaAJDB10DkbCuNgYOigdrI4GJA1TwfupoNxQmDowM0CaXQQ83TQO3Tgz3k6mDtU4GdwAAdwAAdwAAdwAAdwAAdv4EDq6xtIunryB+yJOdBtkiytBNkkSf6chGk5kGazoXVgPy5ORwdf/JA5LQfUm2RwoDu6Mg7mczmPC+ln86zwi/k8m7gD3Yqmsw5kJbqGHBSVSCr7ejYSIjKvWCdeB3Ipkst2qAPqcT06EKutEL1eifaQPHxXPSUHhRDnwYFOxeoyOhCRluZDWPrX/PHn0RNyoHOxOhxoLOjiKBJ9obFwoepPtC9T0mH3GpweTY/TcWCeBGmeJ6JtqBi6PO/ENv3VwcO3lBNycLruM+wOty2HpuO91skwFtLJj4XsHMdxlIhFVMSGXLSxcZDQs0Kc3mVOJLTtpr1aiVTTnLg1W/D2OqaCoAeHmPr6wHiIomsv51Hvm2fjITpm0u+jvvBldHrwnVNzQCXweelbB3r4K/u1mPac+NgIzQdfvqKeuAO/P56/fC03dQePq//NHDwBHMABHMABHMDBBBxgP5LjfWknng6wP9HxPtWGpwN3W/f57lfGvvXrS0U3CtieX8A5FuFuhcD4PJO7c205Xweuzjee2J5vNOdcnRQC43Ouzs4713zPO3tn4eTcu3kuHpmee1/vzFT2cv6BMZlyzT9Yq8BEgRxfGg6SeQ6GUiYeRyxekKDNJjbWeSie2ryWi+O3VkHg8XNwywaiK7vKXfwsH8nGS3We8vhlA91lRHkqtPmPycL/bk6Wv7DrrCakfrPLiLrLCtMmL+0yJL61+14/m5em+/0Q+9Bpm5fGLivsLjMurw3NLTeva/MnaD9j8hrbQN0yduAeRg6QIXnLEq1iJ5xyllmiQ6asw1xdfpmyY7aww3xlftnCI2+dMT3ytlnjyJz38LsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO/8Dzk4cB0Q3GqAAAAAAElFTkSuQmCC"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex ml-3 justify-center items-center">
        <label>
          <span className="label-text text-lg font-bold cursor-pointer">
            {contact.name}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ContactEl;
