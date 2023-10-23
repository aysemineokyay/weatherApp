import { AiOutlinePlus, AiTwotoneSave } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineCancelPresentation } from "react-icons/md";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero = ({ cityList, setCityList }) => {
  const [showModal, setShowModal] = useState(false);
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState();
  const [cities, setCities] = useState([]);
  const [errorData, setErrorData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledSave, setIsDisabledSave] = useState(true);
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => setCountries(response.data.data))
      .catch((errror) => setErrorData(errror));
  }, []);

  const formattedDataCountry = countries.map((item) => ({
    label: item.country,
    value: item.country,
    data: item.cities,
  }));
  const handleChangeCountry = (selectedOption) => {
    setCountry(selectedOption);
    setIsDisabled(false);
    setCities(selectedOption.data);
  };
  let formattedDataCity = cities.map((item) => ({ label: item, value: item }));
  const handleChangeCity = (selectedOption) => {
    setCity(selectedOption.value);
    setIsDisabledSave(false);
  };
  const handleSave = () => {
    setShowModal(false);
    setCityList([...cityList, city]);
    setCity("");
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-96 bg-[url('/src/assets/sunny.jpg')] bg-cover bg-center">
        <div>
          <h2 className="text-2xl font-bold text-white ">
            Şehir seçerek hava durumunu öğrenebilirsiniz.
          </h2>
          <p className="text-white ">Şehrini seç ve hava durumunu öğren.</p>
          <button
            className="bg-white p-3 rounded-md font-bold mt-5 flex flex-row items-center gap-2 "
            type="button"
            onClick={() => setShowModal(true)}
          >
            <AiOutlinePlus /> Şehir ekle
          </button>
          {showModal && (
            <>
              <div className="flex flex-col z-1 w-[500px] h-screen gap-3 right-0 top-0 fixed bg-white px-5">
                <div className="flex justify-between items-center mt-3 mb-5">
                  <span className="font-bold">Şehir ekle</span>
                  <button
                    className="p-2 bg-gray-100 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    <MdOutlineCancelPresentation />
                  </button>
                </div>
                <div>Ülke</div>
                <Select
                  options={formattedDataCountry}
                  onChange={handleChangeCountry}
                />
                <div>Şehir</div>
                <Select
                  options={formattedDataCity}
                  onChange={handleChangeCity}
                  isDisabled={isDisabled}
                />
                <div className="h-96 flex flex-row items-end justify-end gap-3">
                  <button
                    className="flex bg-white border-black-500 border-solid border-2 px-6 py-2 rounded items-center gap-1 "
                    onClick={() => setShowModal(false)}
                  >
                    <MdOutlineCancel /> Cancel
                  </button>
                  <button
                    className="flex bg-blue-700 border-2 border-blue-700 text-white px-6 py-2 rounded items-center gap-1"
                    disabled={isDisabledSave}
                    onClick={handleSave}
                  >
                    <AiTwotoneSave /> Save
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
