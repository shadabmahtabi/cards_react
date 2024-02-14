import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://randomuser.me/api/?page=1&results=10&seed=abc"
    );
    console.log(data.results);
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full h-[15vh] bg-zinc-100 px-32 flex items-center justify-between gap-8 text-zinc-700 shadow-md">
        <h1 className="text-3xl font-semibold">User's Data Dashboard</h1>
        <div className="flex gap-5 text-base">
          <div className="border-2 border-zinc-500 rounded-md px-3">Admin</div>
          <button onClick={getData} className="bg-[#f7444dd9] text-white px-3 py-1 rounded-md shadow-zinc-700 shadow-inner">Load Data</button>
        </div>
      </div>
      <div className="w-full max-h-[85vh] py-10 px-14 flex flex-wrap items-center justify-center gap-8 overflow-y-scroll overflow-hidden">
        {data.length === 0 ? (
          <div className="cards min-w-[25vw] h-[25vh] bg-zinc-50 rounded-2xl flex items-center justify-center text-2xl shadow-md">
            Loading ...
          </div>
        ) : (
          data.map((user, idx) => {
            return (
              <div
                key={idx}
                className="cards w-[18vw] h-[52vh] bg-zinc-50 rounded-2xl flex flex-col justify-between shadow-md"
              >
                <div className="imgDiv relative w-[100%] h-[60%] rounded-xl overflow-hidden">
                  <div className="overlay absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-t from-zinc-800 to-transparent flex items-end p-3">
                    <div className="text-white w-full">
                      {user.name.title} {user.name.first} {user.name.last}
                    </div>
                  </div>
                  <img
                    className="w-full h-full object-cover"
                    src={user.picture.large}
                    alt=""
                  />
                </div>
                <div className="details w-[100%] h-[40%] bg-zinc-0 text-base py-3 px-5">
                  {/* <div>{user.name.title} {user.name.first} {user.name.last}</div> */}
                  <div>{user.email}</div>
                  <div>{user.gender}</div>
                  <div>{user.phone}</div>
                  <div>
                    {user.location.city}, {user.location.state},{" "}
                    {user.location.country}
                  </div>
                </div>
              </div>
            );
          })
        )}
        {/*  */}
      </div>
    </>
  );
};

// https://randomuser.me/api/?page=1&results=1&seed=abc
// https://cdn.discordapp.com/attachments/667463013443305512/1175943918941130833/Display_Profile.jpg

export default App;

// cell: "081-807-8083"
// dob: {date: '1967-07-23T09:18:33.666Z', age: 56}
// email: "laura.woods@example.com"
// gender: "female"
// id: {name: 'PPS', value: '1101776T'}
// location: {street: {…}, city: 'Blessington', state: 'Wexford', country: 'Ireland',
// postcode: 78276,…}
// login: {uuid: '9f07341f-c7e6-45b7-bab0-af6de5a4582d', username: 'angryostrich988', password:'racers', salt: 'B5ywSDUM', md5: '2eefb6307df2a5fb1f91c6b968dc905b', …}
// name: first: "Laura"last: "Woods"title: "Miss"[[Prototype]]: Objectnat: "IE"phone: "031-623-5189"
// picture: {large: 'https://randomuser.me/api/portraits/women/88.jpg', medium: 'https://randomuser.meapi/portraits/med/women/88.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumbwomen/88.jpg'}
// registered: {date: '2018-10-18T04:05:51.990Z', age: 5}
