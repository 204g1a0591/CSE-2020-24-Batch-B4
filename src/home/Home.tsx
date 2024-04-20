import "./home.css";
import Header from "../shared/header/Header";
// import Footer from "../shared/footer/Footer";
import { useForm, useFieldArray } from "react-hook-form";
import { api } from "../api";
import toast from "react-hot-toast";
export default function Home() {
  const feedBackForm = useForm();
  const generalForm = useForm();
  const qualifications = useForm({
    defaultValues: {
      qualification: [
        { degree: "", University: "", College: "", Year: "", state: "" },
      ],
    },
  });
  const qualificationArray = useFieldArray({
    control: qualifications.control,
    name: "qualification",
  });
  const experiances = useForm({
    defaultValues: {
      experiancedetails: [{ company: "", designation: "", from: "", to: "" }],
    },
  });
  const experianceArray = useFieldArray({
    control: experiances.control,
    name: "experiancedetails",
  });
  const teachingprocesses = useForm({
    defaultValues: {
      teachingprocess: [
        {
          Class_Semester: "",
          CourseCodeName: "",
          no_of_scheduled_classes: "",
          no_of_actual_classes: "",
        },
      ],
    },
  });
  const teachingprocessesArray = useFieldArray({
    control: teachingprocesses.control,
    name: "teachingprocess",
  });
  const StudentFeedbacks = useForm({
    defaultValues: {
      studentfeedback: [
        {
          semester: "",
          CourseCodeName: "",
          feedbackscore1: "",
          feedbackscore2: "",
        },
      ],
    },
  });
  const StudentFeedbacksArray = useFieldArray({
    control: StudentFeedbacks.control,
    name: "studentfeedback",
  });
  const results = useForm({
    defaultValues: {
      results: [
        {
          semester: "",
          CourseCodeName: "",
          no_of_students_appeared: "",
          no_of_students_passed: "",
        },
      ],
    },
  });
  const resultsArray = useFieldArray({
    control: results.control,
    name: "results",
  });
  const Innovativeteachingmethodologys = useForm({
    defaultValues: {
      innovativeteachingmethodology: [
        {
          semester: "",
          CourseCodeName: "",
          teachingmethodology: "",
        },
      ],
    },
  });
  const InnovativeteachingmethodologysArray = useFieldArray({
    control: Innovativeteachingmethodologys.control,
    name: "innovativeteachingmethodology",
  });
  const contentbeyondsyllabus = useForm({
    defaultValues: {
      contentbeyondsyllabus: [
        {
          semester: "",
          CourseCodeName: "",
          content: "",
        },
      ],
    },
  });
  const contentbeyondsyllabusArray = useFieldArray({
    control: contentbeyondsyllabus.control,
    name: "contentbeyondsyllabus",
  });
  const e_contentdevelopeds = useForm({
    defaultValues: {
      e_contentdeveloped: [
        {
          semester: "",
          CourseCodeName: "",
          content: "",
        },
      ],
    },
  });
  const e_contentdevelopedsArray = useFieldArray({
    control: e_contentdevelopeds.control,
    name: "e_contentdeveloped",
  });
  const coursefile = useForm({
    defaultValues: {
      coursefiles: [
        {
          semester: "",
          CourseCodeName: "",
          content: "",
        },
      ],
    },
  });
  const coursefilesArray = useFieldArray({
    control: coursefile.control,
    name: "coursefiles",
  });
  const cirtificationcourcesbyfacultys = useForm({
    defaultValues: {
      cirtificationcourcesbyfaculty: [
        {
          name: "",
          offeredby: "",
        },
      ],
    },
  });
  const cirtificationcourcesbyfacultysArray = useFieldArray({
    control: cirtificationcourcesbyfacultys.control,
    name: "cirtificationcourcesbyfaculty",
  });
  const detailsoffacultydevelopmentprograms = useForm({
    defaultValues: {
      detailsoffacultydevelopmentprogram: [
        {
          name: "",
          offeredby: "",
          no_of_days: "",
        },
      ],
    },
  });
  const detailsoffacultydevelopmentprogramsArray = useFieldArray({
    control: detailsoffacultydevelopmentprograms.control,
    name: "detailsoffacultydevelopmentprogram",
  });
  const additionalactivitys = useForm({
    defaultValues: {
      additionalactivity: [
        {
          activity: "",
        },
      ],
    },
  });
  const additionalactivityArray = useFieldArray({
    control: additionalactivitys.control,
    name: "additionalactivity",
  });
  const facultyexchanges = useForm({
    defaultValues: {
      facultyexchange: [
        {
          name: "",
          date: "",
        },
      ],
    },
  });
  const facultyexchangesArray = useFieldArray({
    control: facultyexchanges.control,
    name: "facultyexchange",
  });
  const publication_of_Journal = useForm({
    defaultValues: {
      publication_of_Journals: [
        {
          Authors: "",
          name: "",
          publisher: "",
          date: "",
        },
      ],
    },
  });
  const publication_of_JournalsArray = useFieldArray({
    control: publication_of_Journal.control,
    name: "publication_of_Journals",
  });
  const projectguidences = useForm({
    defaultValues: {
      projectguidence: [
        {
          item: "",
          score: "",
        },
      ],
    },
  });
  const projectguidencesArray = useFieldArray({
    control: projectguidences.control,
    name: "projectguidence",
  });
  const patent = useForm({
    defaultValues: {
      patents: [
        {
          title: "",
          applicantName: "",
          mobile: "",
          date: "",
        },
      ],
    },
  });
  const patentsArray = useFieldArray({
    control: patent.control,
    name: "patents",
  });
  const fundings = useForm({
    defaultValues: {
      funding: [
        {
          nameofproposal: "",
          nameofagency: "",
          amount: "",
        },
      ],
    },
  });
  const fundingsArray = useFieldArray({
    control: fundings.control,
    name: "funding",
  });
  const consultancys = useForm({
    defaultValues: {
      consultancy: [
        {
          consultancyactivity: "",
          agency: "",
          amount: "",
        },
      ],
    },
  });
  const consultancysArray = useFieldArray({
    control: consultancys.control,
    name: "consultancy",
  });

  return (
    <div>
      <Header />
      <section
        style={{
          height: "170vh",
          width: "100%",
          position: "absolute",
          background:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./college.jpg')",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      >
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card cc">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active mt-5"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        Section A
                      </button>
                      <button
                        className="nav-link  mt-5"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Section B
                      </button>

                      <button
                        className="nav-link  mt-5"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Section C
                      </button>
                      <button
                        className="nav-link  mt-5"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        Section D
                      </button>
                    </div>
                  </div>
                  <div className="col-10">
                    {" "}
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                        tabIndex={0}
                      >
                        <div className="h6 text-center text-light">
                          GENERAL INFORMATION OF THE FACULTY
                        </div>
                        <form>
                          <div className="row mt-3">
                            <div className="col-3">
                              <input
                                placeholder="Name"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("name", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3">
                              <input
                                placeholder="Designation"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.designation
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("designation", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3">
                              <input
                                placeholder="Department"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.department
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("department", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3">
                              <input
                                placeholder="highestQualification"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors
                                    .highestQualification
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register(
                                  "highestQualification",
                                  {
                                    required: "field is required",
                                  }
                                )}
                              />
                            </div>
                            <div className="col-3">
                              <label htmlFor=" DOB" className="form-label">
                                DOB
                              </label>
                              <input
                                type="date"
                                className={`form-control ${
                                  generalForm.formState.errors.dob
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("dob", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3">
                              <label htmlFor=" DOB" className="form-label">
                                Date of Joining
                              </label>
                              <input
                                placeholder="highestQualification"
                                type="date"
                                className={`form-control ${
                                  generalForm.formState.errors.dateofjoining
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("dateofjoining", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3">
                              <label htmlFor="" className="form-label"></label>
                              <select
                                {...generalForm.register("phd", {
                                  required: "field is required",
                                })}
                                defaultValue={""}
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option disabled value="">
                                  Phd
                                </option>
                                <option value="completed">completed</option>
                                <option value="registered">registered</option>
                                <option value="not-registered">
                                  not-registered
                                </option>
                              </select>
                            </div>
                            <div className="col-3">
                              <label htmlFor="" className="form-label"></label>
                              <input
                                placeholder="specialization"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.specialization
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("specialization", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="caste"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.caste
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("caste", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="salary"
                                type="number"
                                className={`form-control ${
                                  generalForm.formState.errors.salary
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("salary", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="married"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.married
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("married", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="mobile"
                                type="number"
                                className={`form-control ${
                                  generalForm.formState.errors.mobile
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("mobile", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="email"
                                type="email"
                                className={`form-control ${
                                  generalForm.formState.errors.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("email", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="aadhar Number"
                                type="number"
                                className={`form-control ${
                                  generalForm.formState.errors.aadhar
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("aadhar", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="pan"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.pan
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("pan", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="googleScholarlink"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.googleScholarlink
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("googleScholarlink", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="orcid"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.orcid
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("orcid", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="rakedawardsprices"
                                type="text"
                                className={`form-control ${
                                  generalForm.formState.errors.rakedawardsprices
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("rakedawardsprices", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                            <div className="col-3 mt-3">
                              <input
                                placeholder="experiance"
                                type="number"
                                className={`form-control ${
                                  generalForm.formState.errors.experiance
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...generalForm.register("experiance", {
                                  required: "field is required",
                                })}
                              />
                            </div>
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Qualification
                          </div>
                          <div className="row ">
                            {qualificationArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="degree"
                                    type="text"
                                    className={`form-control ${
                                      qualifications.formState.errors
                                        ?.qualification?.[index]?.degree
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...qualifications.register(
                                      `qualification.${index}.degree`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="University"
                                    type="text"
                                    className={`form-control ${
                                      qualifications.formState.errors
                                        ?.qualification?.[index]?.University
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...qualifications.register(
                                      `qualification.${index}.University`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="College"
                                    type="text"
                                    className={`form-control ${
                                      qualifications.formState.errors
                                        ?.qualification?.[index]?.College
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...qualifications.register(
                                      `qualification.${index}.College`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="Year"
                                    type="text"
                                    className={`form-control ${
                                      qualifications.formState.errors
                                        ?.qualification?.[index]?.Year
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...qualifications.register(
                                      `qualification.${index}.Year`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="state"
                                    type="text"
                                    className={`form-control ${
                                      qualifications.formState.errors
                                        ?.qualification?.[index]?.state
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...qualifications.register(
                                      `qualification.${index}.state`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>

                                <div className="col-9 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      qualificationArray.append({
                                        degree: "",
                                        University: "",
                                        College: "",
                                        Year: "",
                                        state: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger"
                                      onClick={() =>
                                        qualificationArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">Experiance</div>
                          <div className="row">
                            {experianceArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="company"
                                    type="text"
                                    className={`form-control ${
                                      experiances.formState.errors
                                        ?.experiancedetails?.[index]?.company
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...experiances.register(
                                      `experiancedetails.${index}.company`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="designation"
                                    type="text"
                                    className={`form-control ${
                                      experiances.formState.errors
                                        ?.experiancedetails?.[index]
                                        ?.designation
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...experiances.register(
                                      `experiancedetails.${index}.designation`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="from"
                                    type="date"
                                    className={`form-control ${
                                      experiances.formState.errors
                                        ?.experiancedetails?.[index]?.from
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...experiances.register(
                                      `experiancedetails.${index}.from`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="to"
                                    type="date"
                                    className={`form-control ${
                                      experiances.formState.errors
                                        ?.experiancedetails?.[index]?.to
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...experiances.register(
                                      `experiancedetails.${index}.to`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-9 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      experianceArray.append({
                                        company: "",
                                        designation: "",
                                        from: "",
                                        to: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger"
                                      onClick={() =>
                                        experianceArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex={0}
                      >
                        <div className="h6 text-center text-light">
                          TEACHING & LEARNNG PROCESSES
                        </div>
                        <form>
                          <div className="h6 text-light  mt-3">
                            Teaching Process (25)
                          </div>
                          <div className="row mt-3">
                            {teachingprocessesArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="Class/Semester"
                                      type="text"
                                      className={`form-control ${
                                        teachingprocesses.formState.errors
                                          ?.teachingprocess?.[index]
                                          ?.Class_Semester
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...teachingprocesses.register(
                                        `teachingprocess.${index}.Class_Semester`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="CourseCodeName"
                                      type="text"
                                      className={`form-control ${
                                        teachingprocesses.formState.errors
                                          ?.teachingprocess?.[index]
                                          ?.CourseCodeName
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...teachingprocesses.register(
                                        `teachingprocess.${index}.CourseCodeName`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="no_of_scheduled_classes"
                                      type="number"
                                      className={`form-control ${
                                        teachingprocesses.formState.errors
                                          ?.teachingprocess?.[index]
                                          ?.no_of_scheduled_classes
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...teachingprocesses.register(
                                        `teachingprocess.${index}.no_of_scheduled_classes`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>

                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="no_of_actual_classes"
                                      type="number"
                                      className={`form-control ${
                                        teachingprocesses.formState.errors
                                          ?.teachingprocess?.[index]
                                          ?.no_of_actual_classes
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...teachingprocesses.register(
                                        `teachingprocess.${index}.no_of_actual_classes`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-12 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        teachingprocessesArray.append({
                                          Class_Semester: "",
                                          CourseCodeName: "",
                                          no_of_scheduled_classes: "",
                                          no_of_actual_classes: "",
                                        })
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger"
                                        onClick={() =>
                                          teachingprocessesArray.remove(index)
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>

                        <form>
                          <div className="h6 text-light  mt-3">
                            Student Feedback (25)
                          </div>
                          <div className="row">
                            {StudentFeedbacksArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="semester"
                                    type="text"
                                    className={`form-control ${
                                      StudentFeedbacks.formState.errors
                                        ?.studentfeedback?.[index]?.semester
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...StudentFeedbacks.register(
                                      `studentfeedback.${index}.semester`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="CourseCodeName"
                                    type="text"
                                    className={`form-control ${
                                      StudentFeedbacks.formState.errors
                                        ?.studentfeedback?.[index]
                                        ?.CourseCodeName
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...StudentFeedbacks.register(
                                      `studentfeedback.${index}.CourseCodeName`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="feedbackscore1"
                                    type="number"
                                    className={`form-control ${
                                      StudentFeedbacks.formState.errors
                                        ?.studentfeedback?.[index]
                                        ?.feedbackscore1
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...StudentFeedbacks.register(
                                      `studentfeedback.${index}.feedbackscore1`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="feedbackscore2"
                                    type="number"
                                    className={`form-control ${
                                      StudentFeedbacks.formState.errors
                                        ?.studentfeedback?.[index]
                                        ?.feedbackscore2
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...StudentFeedbacks.register(
                                      `studentfeedback.${index}.feedbackscore2`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-12 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      StudentFeedbacksArray.append({
                                        semester: "",
                                        CourseCodeName: "",
                                        feedbackscore1: "",
                                        feedbackscore2: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger"
                                      onClick={() =>
                                        StudentFeedbacksArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>

                        <form>
                          <div className="h6 text-light  mt-3">
                            Results (25)
                          </div>
                          <div className="row">
                            {resultsArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="semester"
                                    type="text"
                                    className={`form-control ${
                                      results.formState.errors?.results?.[index]
                                        ?.semester
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...results.register(
                                      `results.${index}.semester`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="CourseCodeName"
                                    type="text"
                                    className={`form-control ${
                                      results.formState.errors?.results?.[index]
                                        ?.CourseCodeName
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...results.register(
                                      `results.${index}.CourseCodeName`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="no_of_students_appeared"
                                    type="number"
                                    className={`form-control ${
                                      results.formState.errors?.results?.[index]
                                        ?.no_of_students_appeared
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...results.register(
                                      `results.${index}.no_of_students_appeared`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="no_of_students_passed"
                                    type="number"
                                    className={`form-control ${
                                      results.formState.errors?.results?.[index]
                                        ?.no_of_students_passed
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...results.register(
                                      `results.${index}.no_of_students_passed`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-12 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      resultsArray.append({
                                        semester: "",
                                        CourseCodeName: "",
                                        no_of_students_appeared: "",
                                        no_of_students_passed: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger"
                                      onClick={() => resultsArray.remove(index)}
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>

                        <form>
                          <div className="h6 text-light  mt-3">
                            Innovative Teaching methodology (25)
                          </div>
                          <div className="row">
                            {InnovativeteachingmethodologysArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="semester"
                                      type="text"
                                      className={`form-control ${
                                        Innovativeteachingmethodologys.formState
                                          .errors
                                          ?.innovativeteachingmethodology?.[
                                          index
                                        ]?.semester
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...Innovativeteachingmethodologys.register(
                                        `innovativeteachingmethodology.${index}.semester`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="CourseCodeName"
                                      type="text"
                                      className={`form-control ${
                                        Innovativeteachingmethodologys.formState
                                          .errors
                                          ?.innovativeteachingmethodology?.[
                                          index
                                        ]?.CourseCodeName
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...Innovativeteachingmethodologys.register(
                                        `innovativeteachingmethodology.${index}.CourseCodeName`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="teachingmethodology"
                                      type="text"
                                      className={`form-control ${
                                        Innovativeteachingmethodologys.formState
                                          .errors
                                          ?.innovativeteachingmethodology?.[
                                          index
                                        ]?.teachingmethodology
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...Innovativeteachingmethodologys.register(
                                        `innovativeteachingmethodology.${index}.teachingmethodology`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>

                                  <div className="col-12 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        InnovativeteachingmethodologysArray.append(
                                          {
                                            semester: "",
                                            CourseCodeName: "",
                                            teachingmethodology: "",
                                          }
                                        )
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger"
                                        onClick={() =>
                                          InnovativeteachingmethodologysArray.remove(
                                            index
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>

                        <form>
                          <div className="h6 text-light  mt-3">
                            Content Beyond Syllabus (25)
                          </div>
                          <div className="row">
                            {contentbeyondsyllabusArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="semester"
                                      type="text"
                                      className={`form-control ${
                                        contentbeyondsyllabus.formState.errors
                                          ?.contentbeyondsyllabus?.[index]
                                          ?.semester
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...contentbeyondsyllabus.register(
                                        `contentbeyondsyllabus.${index}.semester`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="CourseCodeName"
                                      type="text"
                                      className={`form-control ${
                                        contentbeyondsyllabus.formState.errors
                                          ?.contentbeyondsyllabus?.[index]
                                          ?.CourseCodeName
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...contentbeyondsyllabus.register(
                                        `contentbeyondsyllabus.${index}.CourseCodeName`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="content"
                                      type="text"
                                      className={`form-control ${
                                        contentbeyondsyllabus.formState.errors
                                          ?.contentbeyondsyllabus?.[index]
                                          ?.content
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...contentbeyondsyllabus.register(
                                        `contentbeyondsyllabus.${index}.content`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>

                                  <div className="col-12 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        contentbeyondsyllabusArray.append({
                                          semester: "",
                                          CourseCodeName: "",
                                          content: "",
                                        })
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          contentbeyondsyllabusArray.remove(
                                            index
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light  mt-3">
                            Content Developed (25)
                          </div>
                          <div className="row">
                            {e_contentdevelopedsArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="semester"
                                      type="text"
                                      className={`form-control ${
                                        e_contentdevelopeds.formState.errors
                                          ?.e_contentdeveloped?.[index]
                                          ?.semester
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...e_contentdevelopeds.register(
                                        `e_contentdeveloped.${index}.semester`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="CourseCodeName"
                                      type="text"
                                      className={`form-control ${
                                        e_contentdevelopeds.formState.errors
                                          ?.e_contentdeveloped?.[index]
                                          ?.CourseCodeName
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...e_contentdevelopeds.register(
                                        `e_contentdeveloped.${index}.CourseCodeName`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      placeholder="content"
                                      type="text"
                                      className={`form-control ${
                                        e_contentdevelopeds.formState.errors
                                          ?.e_contentdeveloped?.[index]?.content
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      {...e_contentdevelopeds.register(
                                        `e_contentdeveloped.${index}.content`,
                                        {
                                          required: "field is required",
                                        }
                                      )}
                                    />
                                  </div>

                                  <div className="col-12 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        e_contentdevelopedsArray.append({
                                          semester: "",
                                          CourseCodeName: "",
                                          content: "",
                                        })
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          e_contentdevelopedsArray.remove(index)
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Course files (50)
                          </div>
                          <div className="row">
                            {coursefilesArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="semester"
                                    type="text"
                                    className={`form-control ${
                                      coursefile.formState.errors
                                        ?.coursefiles?.[index]?.semester
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...coursefile.register(
                                      `coursefiles.${index}.semester`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="CourseCodeName"
                                    type="text"
                                    className={`form-control ${
                                      coursefile.formState.errors
                                        ?.coursefiles?.[index]?.CourseCodeName
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...coursefile.register(
                                      `coursefiles.${index}.CourseCodeName`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    placeholder="content"
                                    type="text"
                                    className={`form-control ${
                                      coursefile.formState.errors
                                        ?.coursefiles?.[index]?.content
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    {...coursefile.register(
                                      `coursefiles.${index}.content`,
                                      {
                                        required: "field is required",
                                      }
                                    )}
                                  />
                                </div>
                                <div className="col-12 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      coursefilesArray.append({
                                        semester: "",
                                        CourseCodeName: "",
                                        content: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                    "
                                      onClick={() =>
                                        coursefilesArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                        tabIndex={0}
                      >
                        <div className="h6 text-center text-light">
                          PROFESSIONAL RELATED CONTRIBUTIONS
                        </div>
                        <form>
                          <div className="h6 text-light">
                            Certification Courses done by the Faculty(25)
                          </div>
                          <div className="row">
                            {cirtificationcourcesbyfacultysArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="text"
                                      className={`form-control ${
                                        cirtificationcourcesbyfacultys.formState
                                          .errors
                                          ?.cirtificationcourcesbyfaculty?.[
                                          index
                                        ]?.name
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      placeholder="Cource Name"
                                      {...cirtificationcourcesbyfacultys.register(
                                        `cirtificationcourcesbyfaculty.${index}.name`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="text"
                                      className={`form-control ${
                                        cirtificationcourcesbyfacultys.formState
                                          .errors
                                          ?.cirtificationcourcesbyfaculty?.[
                                          index
                                        ]?.offeredby
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      placeholder="offeredby"
                                      {...cirtificationcourcesbyfacultys.register(
                                        `cirtificationcourcesbyfaculty.${index}.offeredby`
                                      )}
                                    />
                                  </div>
                                  <div className="col-6 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        cirtificationcourcesbyfacultysArray.append(
                                          {
                                            name: "",
                                            offeredby: "",
                                          }
                                        )
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          cirtificationcourcesbyfacultysArray.remove(
                                            index
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Details of Faculty Development Program (25)
                          </div>
                          <div className="row">
                            {detailsoffacultydevelopmentprogramsArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Cource Name"
                                      {...detailsoffacultydevelopmentprograms.register(
                                        `detailsoffacultydevelopmentprogram.${index}.name`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    {" "}
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="offeredby"
                                      {...detailsoffacultydevelopmentprograms.register(
                                        `detailsoffacultydevelopmentprogram.${index}.offeredby`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    {" "}
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="offeredby"
                                      {...detailsoffacultydevelopmentprograms.register(
                                        `detailsoffacultydevelopmentprogram.${index}.no_of_days`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    {" "}
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        detailsoffacultydevelopmentprogramsArray.append(
                                          {
                                            name: "",
                                            offeredby: "",
                                            no_of_days: "",
                                          }
                                        )
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          detailsoffacultydevelopmentprogramsArray.remove(
                                            index
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Administrative or additional Activity (25)
                          </div>
                          <div className="row">
                            {additionalactivityArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Activity Name"
                                      {...additionalactivitys.register(
                                        `additionalactivity.${index}.activity`
                                      )}
                                    />
                                  </div>
                                  <div className="col-9 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        additionalactivityArray.append({
                                          activity: "",
                                        })
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          additionalactivityArray.remove(index)
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Faculty Exchange or Collaborative Activity (25)
                          </div>
                          <div className="row">
                            {facultyexchangesArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name"
                                    {...facultyexchanges.register(
                                      `facultyexchange.${index}.name`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    className="form-control"
                                    type="date"
                                    {...facultyexchanges.register(
                                      `facultyexchange.${index}.date`
                                    )}
                                  />
                                </div>
                                <div className="col-6 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      facultyexchangesArray.append({
                                        name: "",
                                        date: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                          "
                                      onClick={() =>
                                        facultyexchangesArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                        tabIndex={0}
                      >
                        <div className="h6 text-light text-center">
                          RESEARCH ACTIVITIES
                        </div>
                        <form>
                          <div className="h6 text-light">
                            Publication of Journals (50)
                          </div>
                          <div className="row">
                            {publication_of_JournalsArray.fields.map(
                              (item, index) => (
                                <>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Authors"
                                      {...publication_of_Journal.register(
                                        `publication_of_Journals.${index}.Authors`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="name"
                                      {...publication_of_Journal.register(
                                        `publication_of_Journals.${index}.name`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="publisher"
                                      {...publication_of_Journal.register(
                                        `publication_of_Journals.${index}.publisher`
                                      )}
                                    />
                                  </div>
                                  <div className="col-3 mt-3">
                                    <input
                                      type="date"
                                      className="form-control"
                                      placeholder="year"
                                      {...publication_of_Journal.register(
                                        `publication_of_Journals.${index}.date`
                                      )}
                                    />
                                  </div>
                                  <div className="col-12 mt-3">
                                    <button
                                      type="button"
                                      style={{ marginLeft: "6px" }}
                                      className="btn btn-primary"
                                      onClick={() =>
                                        publication_of_JournalsArray.append({
                                          Authors: "",
                                          name: "",
                                          publisher: "",
                                          date: "",
                                        })
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-danger
                                          "
                                        onClick={() =>
                                          publication_of_JournalsArray.remove(
                                            index
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                    )}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Project Guidence (25)
                          </div>
                          <div className="row">
                            {projectguidencesArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Item"
                                    {...projectguidences.register(
                                      `projectguidence.${index}.item`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Score"
                                    {...projectguidences.register(
                                      `projectguidence.${index}.score`
                                    )}
                                  />
                                </div>

                                <div className="col-6 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      projectguidencesArray.append({
                                        item: "",
                                        score: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                          "
                                      onClick={() =>
                                        projectguidencesArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light">Patents (25)</div>
                          <div className="row">
                            {patentsArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="title"
                                    {...patent.register(
                                      `patents.${index}.title`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="applicantName"
                                    {...patent.register(
                                      `patents.${index}.applicantName`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="mobile"
                                    {...patent.register(
                                      `patents.${index}.mobile`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="date"
                                    className="form-control"
                                    placeholder="date"
                                    {...patent.register(
                                      `patents.${index}.date`
                                    )}
                                  />
                                </div>
                                <div className="col-12 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      patentsArray.append({
                                        title: "",
                                        applicantName: "",
                                        mobile: "",
                                        date: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                          "
                                      onClick={() => patentsArray.remove(index)}
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">Funding (25)</div>
                          <div className="row">
                            {fundingsArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nameofproposal"
                                    {...fundings.register(
                                      `funding.${index}.nameofproposal`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nameofagency"
                                    {...fundings.register(
                                      `funding.${index}.nameofagency`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="amount"
                                    {...fundings.register(
                                      `funding.${index}.amount`
                                    )}
                                  />
                                </div>
                                <div className="col-12 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      fundingsArray.append({
                                        nameofproposal: "",
                                        nameofagency: "",
                                        amount: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                          "
                                      onClick={() =>
                                        fundingsArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Consultancy (25)
                          </div>
                          <div className="row">
                            {consultancysArray.fields.map((item, index) => (
                              <>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="consultancyactivity"
                                    {...consultancys.register(
                                      `consultancy.${index}.consultancyactivity`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="agency"
                                    {...consultancys.register(
                                      `consultancy.${index}.agency`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="amount"
                                    {...consultancys.register(
                                      `consultancy.${index}.amount`
                                    )}
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <button
                                    type="button"
                                    style={{ marginLeft: "6px" }}
                                    className="btn btn-primary"
                                    onClick={() =>
                                      consultancysArray.append({
                                        consultancyactivity: "",
                                        agency: "",
                                        amount: "",
                                      })
                                    }
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                  {index > 0 && (
                                    <button
                                      type="button"
                                      style={{ marginLeft: "10px" }}
                                      className="btn btn-danger
                                          "
                                      onClick={() =>
                                        consultancysArray.remove(index)
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </form>
                        <form>
                          <div className="h6 text-light mt-3">
                            Feedback from Peers (50)
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <textarea
                                className="form-control"
                                placeholder="Feedback from Peers"
                                {...feedBackForm.register("feedbackfrompeers")}
                              />
                            </div>
                          </div>
                        </form>

                        <div className="row mt-4">
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={async () => {
                                try {
                                  const user = JSON.parse(
                                    sessionStorage.getItem("user") || "{}"
                                  );
                                  let teachingProcess = 0;
                                  let studentFeed = 0;
                                  let result = 0;
                                  let innovativeteachingmeth = 0;
                                  let e_contet = 0;
                                  let contentbeyondSyll = 0;
                                  let courseFilee = 0;
                                  // sec-c
                                  let cirtifications = 0;
                                  let developProgram = 0;
                                  let additionalActivity = 0;
                                  let facultExc = 0;
                                  //sec-d
                                  let publications = 0;
                                  let projectGuidence = 0;
                                  let patientss = 0;
                                  let funds = 0;
                                  let consultanciess = 0;

                                  if (
                                    teachingprocesses.getValues()
                                      .teachingprocess.length > 0 &&
                                    teachingprocesses.getValues()
                                      .teachingprocess[0].Class_Semester != ""
                                  ) {
                                    teachingProcess = 25;
                                  }
                                  if (
                                    StudentFeedbacks.getValues().studentfeedback
                                      .length > 0 &&
                                    StudentFeedbacks.getValues()
                                      .studentfeedback[0].semester != ""
                                  ) {
                                    studentFeed = 25;
                                  }
                                  if (
                                    results.getValues().results.length > 0 &&
                                    results.getValues().results[0].semester !=
                                      ""
                                  ) {
                                    result = 25;
                                  }
                                  if (
                                    Innovativeteachingmethodologys.getValues()
                                      .innovativeteachingmethodology.length >
                                      0 &&
                                    Innovativeteachingmethodologys.getValues()
                                      .innovativeteachingmethodology[0]
                                      .semester != ""
                                  ) {
                                    innovativeteachingmeth = 25;
                                  }

                                  if (
                                    contentbeyondsyllabus.getValues()
                                      .contentbeyondsyllabus.length > 0 &&
                                    contentbeyondsyllabus.getValues()
                                      .contentbeyondsyllabus[0].semester != ""
                                  ) {
                                    contentbeyondSyll = 25;
                                  }
                                  if (
                                    e_contentdevelopeds.getValues()
                                      .e_contentdeveloped.length > 0 &&
                                    e_contentdevelopeds.getValues()
                                      .e_contentdeveloped[0].semester != ""
                                  ) {
                                    e_contet = 25;
                                  }
                                  if (
                                    coursefile.getValues().coursefiles.length >
                                      0 &&
                                    coursefile.getValues().coursefiles[0]
                                      .semester != ""
                                  ) {
                                    courseFilee = 50;
                                  }
                                  if (
                                    cirtificationcourcesbyfacultys.getValues()
                                      .cirtificationcourcesbyfaculty.length >
                                      0 &&
                                    cirtificationcourcesbyfacultys.getValues()
                                      .cirtificationcourcesbyfaculty[0].name !=
                                      ""
                                  ) {
                                    cirtifications = 25;
                                  }

                                  if (
                                    detailsoffacultydevelopmentprograms.getValues()
                                      .detailsoffacultydevelopmentprogram
                                      .length > 0 &&
                                    detailsoffacultydevelopmentprograms.getValues()
                                      .detailsoffacultydevelopmentprogram[0]
                                      .name != ""
                                  ) {
                                    developProgram = 25;
                                  }
                                  if (
                                    additionalactivitys.getValues()
                                      .additionalactivity.length > 0 &&
                                    additionalactivitys.getValues()
                                      .additionalactivity[0].activity != ""
                                  ) {
                                    additionalActivity = 25;
                                  }

                                  if (
                                    facultyexchanges.getValues().facultyexchange
                                      .length > 0 &&
                                    facultyexchanges.getValues()
                                      .facultyexchange[0].name != ""
                                  ) {
                                    facultExc = 25;
                                  }

                                  if (
                                    publication_of_Journal.getValues()
                                      .publication_of_Journals.length > 0 &&
                                    publication_of_Journal.getValues()
                                      .publication_of_Journals[0].name != ""
                                  ) {
                                    publications = 50;
                                  }
                                  if (
                                    projectguidences.getValues().projectguidence
                                      .length > 0 &&
                                    projectguidences.getValues()
                                      .projectguidence[0].item != ""
                                  ) {
                                    projectGuidence = 25;
                                  }

                                  if (
                                    patent.getValues().patents.length > 0 &&
                                    patent.getValues().patents[0].title != ""
                                  ) {
                                    patientss = 25;
                                  }

                                  if (
                                    fundings.getValues().funding.length > 0 &&
                                    fundings.getValues().funding[0]
                                      .nameofagency != ""
                                  ) {
                                    funds = 25;
                                  }

                                  if (
                                    consultancys.getValues().consultancy
                                      .length > 0 &&
                                    consultancys.getValues().consultancy[0]
                                      .agency != ""
                                  ) {
                                    consultanciess = 25;
                                  }
                                  const scoresData = {
                                    teachingProcess: teachingProcess,
                                    studentFeedback: studentFeed,
                                    results: result,
                                    innovativeTeachingmethodology:
                                      innovativeteachingmeth,
                                    contentbeyondthesyllabus: contentbeyondSyll,
                                    e_contentdeveloped: e_contet,
                                    coursefiles: courseFilee,
                                    certificationCourses: cirtifications,
                                    detailsofFacultyDevelopmentProgram:
                                      developProgram,
                                    additionalActivity: additionalActivity,
                                    facultyExchange: facultExc,
                                    publicationofJournals: publications,
                                    projectGuidence: projectGuidence,
                                    patents: patientss,
                                    funding: funds,
                                    consultancy: consultanciess,

                                    total1:
                                      courseFilee +
                                      contentbeyondSyll +
                                      e_contet +
                                      innovativeteachingmeth +
                                      result +
                                      studentFeed +
                                      teachingProcess,
                                    total2:
                                      facultExc +
                                      additionalActivity +
                                      developProgram +
                                      cirtifications,
                                    tatal3:
                                      consultanciess +
                                      funds +
                                      patientss +
                                      projectGuidence +
                                      publications,
                                      feedback:50,
                                    facultyId: user.id,
                                  };
                                  const dataToSend = {
                                    facultyId: user.id,
                                    ...generalForm.getValues(),
                                    ...feedBackForm.getValues(),
                                    ...qualifications.getValues(),
                                    ...experiances.getValues(),
                                    ...teachingprocesses.getValues(),
                                    ...StudentFeedbacks.getValues(),
                                    ...results.getValues(),
                                    ...Innovativeteachingmethodologys.getValues(),
                                    ...contentbeyondsyllabus.getValues(),
                                    ...e_contentdevelopeds.getValues(),
                                    ...coursefile.getValues(),
                                    ...cirtificationcourcesbyfacultys.getValues(),
                                    ...detailsoffacultydevelopmentprograms.getValues(),
                                    ...additionalactivitys.getValues(),
                                    ...facultyexchanges.getValues(),
                                    ...publication_of_Journal.getValues(),
                                    ...projectguidences.getValues(),
                                    ...patent.getValues(),
                                    ...fundings.getValues(),
                                    ...consultancys.getValues(),
                                  };
                                  // console.log(dataToSend, "dataToSend");
                                  await api.post(`form`, dataToSend);
                                  await api.post("scores", scoresData);
                                  toast.success("Form submitted successfully");
                                  window.location.reload();
                                } catch (error: any) {
                                  toast.error(error.response.data.message);
                                }
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="foot">
          <Footer />
        </div> */}
      </section>
    </div>
  );
}
