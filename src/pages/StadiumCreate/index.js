import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import MyInput from "../../components/MyInput";
import { useNavigate, useParams } from "react-router-dom";

function StadiumCreate() {
  const [titleInp, setTitleInp] = useState("");
  const [capacityInp, setCapacityInp] = useState("");
  const [locationInp, setLocationInp] = useState("");
  const [openInp, setOpenInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [imgInp, setImgInp] = useState("");
  const [raytingInp, setRaytingInp] = useState("");
  const [clubInp, setClubInp] = useState("");

  // FOR ERRORS!
  const [errTitle, setErrTitle] = useState("");
  const [errCapacity, setErrCapacity] = useState("");
  const [errLocation, setErrLocation] = useState("");
  const [errOpen, setErrOpen] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errImg, setErrImg] = useState("");
  const [errRayting, setErrRayting] = useState("");
  const [errClub, setErrClub] = useState("");

  let navigate = useNavigate();
  const [data, setData] = useState();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (titleInp == " ") {
      setErrTitle("Fill in the field please !");
      return;
    }

    if (capacityInp < 10000) {
      setErrCapacity("Capacity must be more than 10000 !");
      return;
    }

    if (locationInp == " ") {
      setErrLocation("Fill in the field please !");
      return;
    }

    if (openInp == " ") {
      setErrOpen("Fill in the field please !");
      return;
    }

    if (priceInp < 100000) {
      setErrPrice("The price of Stadium must be more than 100000$");
      return;
    }

    if (imgInp == " ") {
      setErrImg("Fill in the field please !");
      return;
    }

    if (raytingInp > 5 || raytingInp < 1) {
      setErrRayting("Error Rayting must be from 1 to 5!");
      return;
    }

    if (clubInp == " ") {
      setErrClub("Fill in the field please !");
      return;
    }

    axios
      .post("http://localhost:3000/products", {
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
        navigate("/");
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
        <form className=" p-8  grid grid-cols-2 gap-x-6">
          <div>
            <MyInput
              titleText={"Title"}
              type={"text"}
              myValue={titleInp}
              mySetValueChange={setTitleInp}
              id={"title"}
              placeholder={"Bunyodkor"}
            />
            {errTitle && (
              <p className="text-red-500 font-semibold -mt-8">{errTitle}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Location"}
              type={"text"}
              myValue={locationInp}
              mySetValueChange={setLocationInp}
              id={"location"}
              placeholder={"Uzbekistan, Tashkent"}
            />
            {errLocation && (
              <p className="text-red-500 font-semibold -mt-8">{errLocation}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Image"}
              type={"text"}
              myValue={imgInp}
              mySetValueChange={setImgInp}
              id={"image"}
              placeholder={"ImgURL"}
            />
            {errImg && (
              <p className="text-red-500 font-semibold -mt-8">{errImg}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Opened"}
              type={"date"}
              myValue={openInp}
              mySetValueChange={setOpenInp}
              id={"open"}
              placeholder={"20.03.20015"}
            />
            {errOpen && (
              <p className="text-red-500 font-semibold -mt-8">Hello</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Price"}
              type={"number"}
              myValue={priceInp}
              mySetValueChange={setPriceInp}
              id={"price"}
              placeholder={"150000000$"}
            />
            {errPrice && (
              <p className="text-red-500 font-semibold -mt-8">{errPrice}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Capacity"}
              type={"number"}
              myValue={capacityInp}
              mySetValueChange={setCapacityInp}
              id={"capacity"}
              placeholder={"65000"}
            />
            {errCapacity && (
              <p className="text-red-500 font-semibold -mt-8">{errCapacity}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Rayting"}
              type={"number"}
              myValue={raytingInp}
              mySetValueChange={setRaytingInp}
              id={"rayting"}
              placeholder={"1-5"}
            />
            {errRayting && (
              <p className="text-red-500 font-semibold -mt-8">{errRayting}</p>
            )}
          </div>

          <div>
            <MyInput
              titleText={"Club Name"}
              type={"text"}
              myValue={clubInp}
              mySetValueChange={setClubInp}
              id={"club"}
              placeholder={"Uzbekistan, National Team"}
            />
            {errClub && (
              <p className="text-red-500 font-semibold -mt-8">{errClub}</p>
            )}
          </div>
        </form>
        <div className="flex justify-end pr-4">
          <button
            onClick={onSubmit}
            className=" flex justify-center items-center py-2 mb-8 w-40  bg-green-500 text-white rounded-md  text-xl font-mono font-bold transform transition-all ease-out  hover:bg-green-200 hover:text-green-500 "
          >
            <img
              className="w-8 h-8 text-white"
              src="https://www.svgrepo.com/show/404617/astronomy-galaxy-planet-solar-system-space.svg"
            />
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default StadiumCreate;
