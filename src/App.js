import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import { useForm, useFieldArray } from "react-hook-form";
import ScrollButton from "./component/ScrollButton";
import classNames from "classnames";
import MultiSelect from "./component/MultiSelect";

function App() {
  const skills = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "materia-ui", label: "Material UI" },
    { value: "scss", label: "SCSS" },
    { value: "nodejs", label: "NodeJs" },
    { value: "reactjs", label: "ReactJs" },
    { value: "mongodb", label: "MognoDB" },
    { value: "expressjs", label: "Express JS" },
  ];
  const languages = [
    { value: "english", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Gujarati", label: "Gujarati" },
  ];
  const [formData, setFormData] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const {
    about,
    name,
    address,
    email,
    phone,
    birthdate,
    education,
    projects,
    experience,
  } = formData;

  var date = new Date();
  var month;
  if (date.getMonth() < 9) {
    month = "0" + (date.getMonth() + 1);
  } else {
    month = date.getMonth() + 1;
  }

  var todayDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    getValues,
    control,
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });
  const {
    fields: exepFields,
    append: exepAppend,
    remove: exepRemove,
  } = useFieldArray({ control, name: "experience" });
  const {
    fields: eduFields,
    append: edudAppend,
    remove: edudRemove,
  } = useFieldArray({ control, name: "education" });
  const {
    fields: proFields,
    append: proAppend,
    remove: proRemove,
  } = useFieldArray({ control, name: "projects" });

  const onChangeHandleData = () => {
    setFormData(getValues());
  };
  const onChangeHandleSelectLanguage = (e) => {
    setSelectedLanguage(Array.isArray(e) ? e.map((x) => x.value) : []);
    setFormData(getValues());
  };
  const onChangeHandleSelectSkills = (e) => {
    setSelectedSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
    setFormData(getValues());
  };
  const onSubmitData = (event) => {
    setFormData(getValues());
    console.log(formData);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-4 col-lg-4 d-md-block bg-light sidebar collapse"
            >
              <form onSubmit={handleSubmit(onSubmitData)} autoComplete="off">
                <div className="row">
                  <div className="col-6 my-2">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={classNames("form-control", {
                          "is-invalid": errors.name,
                          "is-valid": !errors.name && touchedFields.name,
                        })}
                        {...register("name", {
                          required: "This field is required",
                          minLength: {
                            value: 3,
                            message: "minimum 3 character required",
                          },
                          maxLength: {
                            value: 20,
                            message: "input size exceed minimum 20 character",
                          },
                          pattern: {
                            value: /[A-Za-z]/,
                            message: "input only alphabet",
                          },
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6 my-2">
                    <div className="form-group">
                      <label htmlFor="birthdate">Birthdate</label>
                      <input
                        type="date"
                        max={todayDate}
                        defaultValue={"1998-01-26"}
                        name="birthdate"
                        id="birthdate"
                        className={classNames("form-control", {
                          "is-invalid": errors.birthdate,
                          "is-valid":
                            !errors.birthdate && touchedFields.birthdate,
                        })}
                        {...register("birthdate", {
                          required: "This field is required",
                        })}
                        onSelect={onChangeHandleData}
                      />
                      {errors.birthdate && (
                        <span className="text-danger">
                          {errors.birthdate.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6 my-2">
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                        className={classNames("form-control", {
                          "is-invalid": errors.email,
                          "is-valid": !errors.email && touchedFields.email,
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6 my-2">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={classNames("form-control", {
                          "is-invalid": errors.phone,
                          "is-valid": !errors.phone && touchedFields.phone,
                        })}
                        {...register("phone", {
                          required: "This field is required",
                          pattern: {
                            value: /\d+/gi,
                            message: "Valid only numbers",
                          },
                          minLength: {
                            value: 10,
                            message: "minimum 10 character required",
                          },
                          maxLength: {
                            value: 10,
                            message: "input size exceed minimum 10 character",
                          },
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="name">Address Line 1</label>
                      <input
                        type="text"
                        name="address.one"
                        id="addressLine1"
                        className={classNames("form-control", {
                          "is-invalid": errors.address?.one,
                          "is-valid":
                            !errors.address?.one && touchedFields.address?.one,
                        })}
                        {...register("address.one", {
                          required: "This field is required",
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.address?.one && (
                        <span className="text-danger">
                          {errors.address?.one.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="name">Address Line 2</label>
                      <input
                        type="text"
                        name="addres.two"
                        className={classNames("form-control", {
                          "is-invalid": errors.address?.two,
                          "is-valid":
                            !errors.address?.two && touchedFields.address?.two,
                        })}
                        id="addressLine2"
                        {...register("address.two", {
                          required: "This field is required",
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.address?.two && (
                        <span className="text-danger">
                          {errors.address.two.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="my-2 col-12">
                    <div className="form-group">
                      <label htmlFor="about">About</label>
                      <textarea
                        name="about"
                        id="about"
                        {...register("about", {
                          required: "This field is required",
                          maxLength: {
                            value: 80,
                            message: "Maximum limit 80 character",
                          },
                        })}
                        className={classNames("form-control", {
                          "is-invalid": errors.about,
                          "is-valid": !errors.about && touchedFields.about,
                        })}
                        onChange={onChangeHandleData}
                      />
                      {errors.about && (
                        <span className="text-danger">
                          {errors.about.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <label htmlFor="skills">Skills</label>
                    <MultiSelect
                      data={skills}
                      className={classNames("form-control", {
                        "is-invalid": errors.skills,
                      })}
                      value={selectedSkills}
                      selectedValue={selectedSkills}
                      onChange={onChangeHandleSelectSkills}
                    />
                    {errors.skills && (
                      <span className="text-danger">
                        {errors.skills.message}
                      </span>
                    )}
                  </div>
                  <div className="col-12 my-2">
                    <label htmlFor="languages">Languages</label>
                    <MultiSelect
                      data={languages}
                      value={selectedLanguage}
                      selectedValue={selectedLanguage}
                      className={classNames("form-control", {
                        "is-invalid": errors.languages,
                      })}
                      onChange={onChangeHandleSelectLanguage}
                    />
                  </div>
                  <hr />
                  <div className="col-12 mb-3">
                    <label className="font-weight-bolder">Educations</label>
                    {eduFields.map((field, index) => (
                      <div className="" key={index}>
                        <div className="input-group mb-3">
                          <div className="col-6 px-1">
                            <label htmlFor="name">Title</label>
                            <input
                              name="title"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`education.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Title"
                            />
                          </div>
                          <div className="col-6 px-1">
                            <div className="form-group">
                              <label htmlFor="location">Select Location</label>
                              <select
                                name="location"
                                className={classNames("form-control")}
                                key={field.id}
                                {...register(`education.${index}.value`)}
                                defaultValue={field.value}
                                placeholder="Select Location"
                              >
                                <option value="">Not selected</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Rajeshthan">Rajeshthan</option>
                              </select>
                              {errors.state && (
                                <span className="text-danger">
                                  {errors.state.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="dateRange">
                              Select From Year to Years
                            </label>
                            {/* <MyDateRangePicker /> */}
                            <input
                              name="dateRange"
                              type="date"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`education.${index}.value`)}
                              defaultValue={field.value}
                            />
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="about">About</label>
                            <textarea
                              name="about"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`education.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="About Education"
                            />
                          </div>
                          <div
                            className="input-group-append"
                            onClick={() => edudRemove(index)}
                          >
                            <span className="input-group-text bg-danger text-light btn btn-danger">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <br></br>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() =>
                        edudAppend({
                          dateRange: "2020-01-04",
                          title: "test",
                          location: "gujarat",
                          about: "about",
                        })
                      }
                    >
                      Add Education
                    </button>
                  </div>
                  <hr />
                  <div className="col-12 mb-3">
                    <label className="font-weight-bolder">Projects</label>
                    {proFields.map((field, index) => (
                      <div className="" key={index}>
                        <div className="input-group mb-3">
                          <div className="col-6 px-1">
                            <label htmlFor="name">Title</label>
                            <input
                              name="title"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`projects.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Title"
                            />
                          </div>
                          <div
                            className="input-group-append"
                            onClick={() => proRemove(index)}
                          >
                            <label htmlFor="name"></label>
                            <br />
                            <span className="input-group-text bg-danger text-light btn btn-danger">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <br></br>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() =>
                        proAppend({
                          title: "Project Title",
                        })
                      }
                    >
                      Add Project
                    </button>
                  </div>
                  <hr />
                  <div className="col-12 mb-3">
                    <label className="font-weight-bolder">Experience</label>
                    {exepFields.map((field, index) => (
                      <div className="" key={index}>
                        <div className="input-group mb-3">
                          <div className="col-6 px-1">
                            <label htmlFor="cmpName">CMP Name</label>
                            <input
                              name="cmpName"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`experience.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="jobpost">Job Post</label>
                            <input
                              name="jobpost"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`experience.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Job Post"
                            />
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="location">Location</label>
                            <input
                              name="location"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`experience.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Location"
                            />
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="cmpName">Description</label>
                            <input
                              name="description"
                              type="text"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`experience.${index}.value`)}
                              defaultValue={field.value}
                              placeholder="Desc here"
                            />
                          </div>
                          <div className="col-6 px-1">
                            <label htmlFor="year">Year</label>
                            <input
                              name="year"
                              type="date"
                              className={classNames("form-control")}
                              key={field.id}
                              {...register(`experience.${index}.value`)}
                              defaultValue={field.value}
                            />
                          </div>
                          <div className="col-6 px-1">
                            <br />
                            <div className="form-check form-switch">
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                                htmlFor="isCurrent"
                              >
                                Currenty Working
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                name="isCurrent"
                                value="isCurrent"
                                key={field.id}
                                {...register(`experience.${index}.value`)}
                                defaultValue={field.value}
                              />
                            </div>
                          </div>
                          <div
                            className="input-group-append"
                            onClick={() => exepRemove(index)}
                          >
                            <label htmlFor="name"></label>
                            <br />
                            <span className="input-group-text bg-danger text-light btn btn-danger">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <br></br>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() =>
                        exepAppend({
                          cmpName: "Knovator",
                          jobpost: "Frontend Developer",
                          location: "Surat",
                          description: "This is reputed company",
                          year: "",
                          isCurrent: false,
                        })
                      }
                    >
                      Add Experience
                    </button>
                  </div>
                </div>

                <button type="submit" className="ms-auto my-4 btn btn-primary">
                  Submit
                </button>
              </form>
            </nav>
            <main className="col-md-8 ms-sm-auto col-lg-8 px-md-4">
              <div className="rela-block page">
                <div className="rela-block top-bar">
                  <div className="caps name">
                    <div className="abs-center">Frontend Developer</div>
                  </div>
                </div>
                <div className="side-bar">
                  <div className="logo">
                    <p className="logo-text">{name ? name : "Name here"}</p>
                  </div>
                  <p>{address ? address.one : "Address Line one"}</p>
                  <p>{address ? address.two : "Address Line Two"}</p>
                  <p>{phone ? phone : "7600446773"}</p>
                  <p>{email ? email : "email@gmail.com"}</p>
                  <p>{birthdate ? birthdate : "26-01-1998"}</p>
                  <br />
                  <p className="rela-block caps side-header">Skills</p>
                  {selectedSkills &&
                    selectedSkills.map((item, ind) => {
                      return (
                        <p key={ind} className="rela-block list-thing">
                          {item}
                        </p>
                      );
                    })}
                  <p className="rela-block caps side-header">Languages</p>
                  {selectedLanguage &&
                    selectedLanguage.map((item, ind) => {
                      return (
                        <p key={ind} className="rela-block list-thing">
                          {item}
                        </p>
                      );
                    })}
                  <p className="rela-block caps side-header">Education</p>
                  {education &&
                    education.map((item, ind) => {
                      return (
                        <>
                          <p key={ind} className="rela-block list-thing">
                            Title : {item.title}
                            <br />
                            Location : {item.location}
                            <br />
                            Year : {item.dateRange}
                            <br />
                            About : {item.about}
                            <br />
                          </p>
                          <hr />
                        </>
                      );
                    })}
                </div>
                <div className="rela-block content-container">
                  <div className="rela-block caps greyed">Profile</div>
                  <p className="long-margin">{about}</p>
                  <div className="rela-block caps greyed">Experience</div>
                  {experience &&
                    experience.map((item, ind) => {
                      return (
                        <div key={ind}>
                          <h3>{item.jobpost}</h3>
                          <p className="light">{item.cmpName}</p>
                          <p className="justified">{item.description}</p>
                          <p className="">Location : {item.location}</p>
                          <p className="">Year : {item.year}</p>
                          <p className="">
                            Currntly Working : {item.isCurrent ? "Yes" : "No"}
                          </p>
                        </div>
                      );
                    })}
                  <div className="rela-block caps greyed">Projects</div>
                  {projects &&
                    projects.map((item, ind) => {
                      return (
                        <>
                          <p key={ind} className="rela-block list-thing">
                            Project Name : {item.value}
                          </p>
                        </>
                      );
                    })}
                </div>
              </div>
              <ScrollButton />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
