import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";
import { GrCloudUpload } from "react-icons/gr";

const EditableForm = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      mobile: "",
      email: "",
    };

    // Mobile number validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid:", formData);
    } else {
      console.log("Form is invalid");
    }
  };
  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full">
        <div className="common-bg flex items-center">
          <h2 className="text-3xl max-[600px]:text-xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Partner With Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] min-h-[90vh] overflow-y-scroll flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-1"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 p-2 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            {/* Flex items for Entity Type and Total Entities */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="entity-type"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-1"
                >
                  Business Role <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-2  text-[16px] block w-full cursor-pointer placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="" disabled hidden>
                      Business Role
                    </option>
                    <option value="state1">OEM</option>
                    <option value="state2">OEM & Installer</option>
                    <option value="state3">Installer</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="total-entities"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-1"
                >
                  Type Of Entity
                  <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-2  text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="" disabled hidden>
                      Select Entity Type
                    </option>
                    <option value="state1">ProprietorShip</option>
                    <option value="state2">Unregistered PartnerShip</option>
                    <option value="state3">LLP</option>
                    <option value="state3">Incorporated Entity</option>

                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Flex items for GST No, PAN No, TAN No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="solar-installations"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  Total Years In Solar Installations
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solar-installations"
                  type="Number"
                  placeholder="Enter Total Years"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="gst-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  GST No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gst-no"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 p-2  block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="pan-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  PAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="pan-no"
                  type="text"
                  placeholder="Enter PAN No"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="tan-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  TAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="tan-no"
                  type="text"
                  placeholder="Enter TAN No"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/* Register Office Address */}
            <div>
              <label
                htmlFor="register-office-address"
                className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
              >
                Registered Office Address
              </label>
              <input
                id="register-office-address"
                type="text"
                placeholder="Enter Building Name /Flat No"
                className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            {/* Flex items for Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="street"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 p-2  block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="pincode"
                  type="text"
                  placeholder="Enter Pincode"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/*--2nd form---*/}
            <div className="flex items-center space-x-1">
              <span className="text-[14px] font-semibold text-[#004A9C] mr-7">
                Empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </span>
              <div
                onClick={() =>
                  formik.setFieldValue(
                    "empanelled_with_state_board",
                    !formik.values.empanelled_with_state_board
                  )
                }
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  formik.values.empanelled_with_state_board
                    ? "bg-[#0BB68D]"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full p-0.5 shadow-md transform ${
                    formik.values.empanelled_with_state_board
                      ? "translate-x-6"
                      : ""
                  } transition-transform duration-300`}
                />
              </div>
              <span
                className={`text-[14px] font-semibold ${
                  formik.values.empanelled_with_state_board
                    ? "text-[#0BB68D]"
                    : "text-gray-400"
                }`}
              >
                {formik.values.empanelled_with_state_board ? "Yes" : "No"}
              </span>
            </div>
            <div className="relative">
              <label
                htmlFor="name_of_empanelled_electricity_board"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                State where you are empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="name_of_empanelled_electricity_board"
                isMulti
                options={states}
                value={states.filter((option) =>
                  formik.values.name_of_empanelled_electricity_board.includes(
                    option.value
                  )
                )}
                name="name_of_empanelled_electricity_board"
                placeholder="Select empanelled boards"
                className="basic-single"
                classNamePrefix="select"
              />
              <p className="text-red-500 text-xs mt-1 absolute">{}</p>
            </div>
            )}
            {/* Others */}
            {isothers && (
              <div className="relative">
                <label
                  htmlFor="others"
                  className="block font-[600] text-[14px] text-[#004A9C]"
                >
                  Others
                </label>
                <input
                  id="others"
                  type="text"
                  placeholder="Enter Electricity Board Name"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-xs mt-1 absolute">{}</p>
              </div>
            )}
            {/* Dropdown Fields in Flex */}
            <div className="flex gap-3 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full relative">
                <label
                  htmlFor="combined_capacity"
                  className="block font-[600] text-[14px] text-[#004A9C]"
                >
                  Combined Capacity Of total installations done till date{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="combined_capacity_of_total_installations_till_date"
                  type="number"
                  placeholder="Enter Combined Capacity  kW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-xs mt-1 absolute">{}</p>
              </div>

              <div className="w-1/2 max-[600px]:w-full relative">
                <label
                  htmlFor="installed_capacity_of_largest_project_worked_on"
                  className="block font-[600] text-[14px] text-[#004A9C]"
                >
                  Installation capacity of the largest project worked on{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="installed_capacity_of_largest_project_worked_on"
                  type="number"
                  placeholder="Enter Installation Capacity kW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-xs mt-1 absolute">{}</p>
              </div>
            </div>
            {/* Product Brands */}
            <div className="w-full relative pt-2">
              <label
                htmlFor="list_of_product_brands"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                Brands You Deal With <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="list_of_product_brands"
                type="text"
                placeholder="Brand1, Brand2, Brand3"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />

              <p className="text-red-500 text-xs mt-1 absolute">{}</p>
            </div>
            <div className="relative pt-2">
              <label
                htmlFor="name_of_empanelled_electricity_board"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                States
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="states"
                isMulti
                options={activestates}
                value={activestates.filter((option) =>
                  formik.values.states.includes(option.value)
                )}
                name="states"
                placeholder="Select State(s)"
                className="basic-single"
                classNamePrefix="select"
              />

              <p className="text-red-500 text-xs mt-1 absolute"></p>
            </div>
            {/* Geographical Regions */}
            <div className="w-full relative">
              <label
                htmlFor="geographical_regions"
                className="block font-[600] mb-1 text-[14px] text-[#004A9C]"
              >
                Geographical Regions Of Operations{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="geographical_regions"
                isSearchable
                isMulti
                options={cities}
                value={cities.filter((option) =>
                  formik.values.geographical_regions.includes(option.value)
                )}
                name="geographical_regions"
                placeholder="Select geographical regions"
                className="basic-single"
                classNamePrefix="select"
              />

              <p className="text-red-500 text-xs mt-1 absolute"></p>
            </div>
            {/* Total Employees and Total Crews */}
            <div className="flex gap-3 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full relative">
                <label
                  htmlFor="no_of_employees"
                  className="block font-[600] mb-1 text-[14px] text-[#004A9C]"
                >
                  Total Employees <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="no_of_employees"
                  type="number"
                  placeholder="Enter Total Employees"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-xs mt-1 absolute">{}</p>
              </div>

              <div className="w-1/2 max-[600px]:w-full relative">
                <label
                  htmlFor="total_no_of_installation_crews"
                  className="block font-[600] text-[14px] text-[#004A9C]"
                >
                  Total Installation Crews Available
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total_no_of_installation_crews"
                  type="number"
                  placeholder="Enter Total Crews Available"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-xs mt-1 absolute">{}</p>
              </div>
            </div>
            {/* Reference Site Details */}
            <div className="w-full relative pt-2">
              <label
                htmlFor="reference_site_details"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                Reference Site Details <span className="text-[#004A9C]">*</span>
              </label>
              <textarea
                id="reference_site_details"
                placeholder="Please mention about some of your key projects"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                maxLength={2000}
              />

              <p className="text-red-500 text-xs mt-1 absolute">{}</p>
            </div>
            {/*--3rd one uploads---*/}
            {/*---GST Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500 pr-6">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="gst-certificate"
                    className="block text-[14px] font-[400] text-gray-600 text-center"
                  >
                    GST Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="gst-certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB.<span className="text-[#004A9C]">*</span>
            </p>
            {/*---PAN----
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="pan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    PAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="pan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---TAN-----
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="tan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    TAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="tan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---Empanelment Certificate----
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="certificate"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Empanelment Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>*/}
            {/*---Reference Site Pictures----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="reference-pictures"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Reference Site Pictures
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="reference-pictures"
                  accept=".png, .jpeg, .jpg"
                  multiple
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---Checkbox and Submit Button----*/}
            <div className="flex justify-center items-center py-4">
              <input
                type="checkbox"
                id="consent"
                className={`w-5 h-5 mr-3 border-2 rounded-md 
                `}
              />

              <label htmlFor="consent" className="text-[#667085]">
                I have reviewed the{" "}
                <button type="button" className="">
                  <span className="text-[#0BB68D]">Terms & Conditions</span>
                </button>{" "}
                and{" "}
                <button type="button" className="text-[#0BB68D]">
                  <span className="text-[#0BB68D]">Privacy Policy</span>
                </button>
                .
              </label>
            </div>
            <div className="flex justify-center items-center py-2">
              <button
                type="submit"
                className={`py-2 px-4 bg-[#0BB68D] text-white rounded-md
              
                `}
              >
                Submit
              </button>
            </div>
          </form>
          {/*---form---*/}
        </div>
      </div>
      {/*---form close---*/}
    </div>
  );
};

export default EditableForm;