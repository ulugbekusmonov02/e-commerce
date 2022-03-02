import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout";
import MyInput from "../../components/MyInput";

function StadiumUpdate() {
  const [titleInp, setTitleInp] = useState("");
  const [capacityInp, setCapacityInp] = useState("");
  const [locationInp, setLocationInp] = useState("");
  const [openInp, setOpenInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [imgInp, setImgInp] = useState("");
  const [raytingInp, setRaytingInp] = useState("");
  const [clubInp, setClubInp] = useState("");

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then(function (response) {
        setTitleInp(response.data.title);
        setCapacityInp(response.data.capacity);
        setLocationInp(response.data.address);
        setOpenInp(response.data.opened);
        setPriceInp(response.data.price);
        setImgInp(response.data.imageURL);
        setRaytingInp(response.data.reyting);
        setClubInp(response.data.club.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/${params.id}`, {
        imageURL: imgInp.trim(),
        title: titleInp.trim(),
        capacity: capacityInp,
        address: locationInp.trim(),
        reyting: raytingInp,
        price: priceInp,
        opened: openInp.trim(),
        club: {
          name: clubInp.trim(),
        },
      })
      .then(function (response) {
        navigate(`/stadium/${params.id}`);
      })
      .catch(function (error) {
        console.log(error);
        alert("Something is wrong, try after minute!");
      });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto shadow border-slate-400 border-2 rounded-md my-10">
        <p className="text-center pt-8 text-2xl font-extrabold text-green-800 ">
          Create a new Stadium
        </p>
        <form className=" p-8  grid grid-cols-2 gap-6">
          <div>
            <MyInput
              titleText={"Title"}
              type={"text"}
              myValue={titleInp}
              mySetValueChange={setTitleInp}
              id={"title"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Location"}
              type={"text"}
              myValue={locationInp}
              mySetValueChange={setLocationInp}
              id={"location"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Image"}
              type={"text"}
              myValue={imgInp}
              mySetValueChange={setImgInp}
              id={"image"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Opened"}
              type={"date"}
              myValue={openInp}
              mySetValueChange={setOpenInp}
              id={"open"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Price"}
              type={"number"}
              myValue={priceInp}
              mySetValueChange={setPriceInp}
              id={"price"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Capacity"}
              type={"number"}
              myValue={capacityInp}
              mySetValueChange={setCapacityInp}
              id={"capacity"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Rayting"}
              type={"number"}
              myValue={raytingInp}
              mySetValueChange={setRaytingInp}
              id={"rayting"}
            />
          </div>

          <div>
            <MyInput
              titleText={"Club Name"}
              type={"text"}
              myValue={clubInp}
              mySetValueChange={setClubInp}
              id={"club"}
            />
          </div>
        </form>
        <div className="flex justify-end pr-4">
          <button
            onClick={onSubmit}
            className=" flex justify-center items-center py-2 mb-8 w-40  bg-blue-500 text-white rounded-md  text-xl font-mono font-bold transform transition-all ease-out  hover:bg-blue-200 hover:text-blue-700 "
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default StadiumUpdate;
