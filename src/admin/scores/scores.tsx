import "./scores.css";
import toast, { Toaster } from "react-hot-toast";
import SideBar from "../shared/sidebar/sidebar";
import Header from "../shared/header/header";
import { api } from "../../api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Scores() {
  const scoreForm = useForm();
  const [userInfo, setUserInfo] = useState({} as any);
  const [qualification, setQualification] = useState([] as any);
  const [experience, setExperience] = useState([] as any);
  const [teachingprocess, setTeachingprocess] = useState([] as any);
  const [studentfeedback, setStudentfeedback] = useState([] as any);
  const [results, setResults] = useState([] as any);
  const [e_contentdeveloped, setE_contentdeveloped] = useState([] as any);
  const [contentbeyondsyllabus, setContentbeyondsyllabus] = useState([] as any);
  const [innovativeteachingmethodology, setInnovativeteachingmethodology] =
    useState([] as any);
  const [cirtificationcourcesbyfaculty, setCirtificationcourcesbyfaculty] =
    useState([] as any);
  const [coursefiles, setCoursefiles] = useState([] as any);
  const [
    detailsoffacultydevelopmentprogram,
    setDetailsoffacultydevelopmentprogram,
  ] = useState([] as any);
  const [additionalactivity, setAdditionalactivity] = useState([] as any);
  const [facultyexchange, setFacultyexchange] = useState([] as any);
  const [projectguidence, setProjectguidence] = useState([] as any);
  const [publication_of_Journals, setPublication_of_Journals] = useState(
    [] as any
  );
  const [patents, setPatents] = useState([] as any);
  const [funding, setFunding] = useState([] as any);
  const [consultancy, setConsultancy] = useState([] as any);
  const getInfo = async () => {
    try {
      const userId = window.location.pathname.split("/")[3];
      // console.log(userId,"userId")
      // const user = JSON.parse(sessionStorage.getItem("user") || "{}");
      const res = await api.get(`form/${userId}`);
      // console.log(res.data, "res");
      setUserInfo(res.data);
      setQualification(JSON.parse(res.data.qualification));
      setExperience(JSON.parse(res.data.experiancedetails));
      setTeachingprocess(JSON.parse(res.data.teachingprocess));
      setStudentfeedback(JSON.parse(res.data.studentfeedback));
      setResults(JSON.parse(res.data.results));
      // setInnovativeteachingmethodology(
      //   JSON.parse(res.data.innovativeteachingmethodology)
      // );
      setE_contentdeveloped(JSON.parse(res.data.e_contentdeveloped));
      setContentbeyondsyllabus(JSON.parse(res.data.contentbeyondsyllabus));
      setCoursefiles(JSON.parse(res.data.coursefiles));
      setCirtificationcourcesbyfaculty(
        JSON.parse(res.data.cirtificationcourcesbyfaculty)
      );
      setDetailsoffacultydevelopmentprogram(
        JSON.parse(res.data.detailsoffacultydevelopmentprogram)
      );
      setAdditionalactivity(JSON.parse(res.data.additionalactivity));
      setFacultyexchange(JSON.parse(res.data.facultyexchange));
      setPublication_of_Journals(JSON.parse(res.data.publication_of_Journals));
      setProjectguidence(JSON.parse(res.data.projectguidence));
      setPatents(JSON.parse(res.data.patents));
      setFunding(JSON.parse(res.data.funding));
      setConsultancy(JSON.parse(res.data.consultancy));
    } catch (error) {
      console.log(error);
    }
  };
  const [userScores, setUserScores] = useState({} as any);
  const getScores = async () => {
    try {
      const userId = window.location.pathname.split("/")[3];
      const res = await api.get(`scores/${userId}`);
      console.log(res.data, "res");
      setUserScores(res.data);
      scoreForm.setValue("teachingProcess", res.data.teachingProcess);
      scoreForm.setValue("studentFeedback", res.data.studentFeedback);
      scoreForm.setValue("results", res.data.results);
      scoreForm.setValue(
        "innovativeTeachingmethodology",
        res.data.innovativeTeachingmethodology
      );
      scoreForm.setValue(
        "contentbeyondthesyllabus",
        res.data.contentbeyondthesyllabus
      );
      scoreForm.setValue("e_contentdeveloped", res.data.e_contentdeveloped);
      scoreForm.setValue("coursefiles", res.data.coursefiles);
      scoreForm.setValue("certificationCourses", res.data.certificationCourses);
      scoreForm.setValue(
        "detailsofFacultyDevelopmentProgram",
        res.data.detailsofFacultyDevelopmentProgram
      );
      scoreForm.setValue("additionalActivity", res.data.studentFeedback);
      scoreForm.setValue("facultyExchange", res.data.facultyExchange);
      scoreForm.setValue(
        "publicationofJournals",
        res.data.publicationofJournals
      );
      scoreForm.setValue("projectGuidence", res.data.projectGuidence);
      scoreForm.setValue("patents", res.data.patents);
      scoreForm.setValue("funding", res.data.funding);
      scoreForm.setValue("consultancy", res.data.consultancy);
      scoreForm.setValue("feedback", res.data.feedback);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInfo();
    getScores();
  }, []);
  return (
    <div className="parent">
      <div className="childleft">
        <div className="sidnav">
          <SideBar />
        </div>
      </div>
      <div className="childright">
        <div className="header">
          <Header title="Faculty Forms" />
        </div>
        <div className="content">
          <div className="d-flex mt-2">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#scoreModal"
            >
              Give Score
            </button>
          </div>
          <div className="row mt-3">
            <div className="h6 text-center">
              GENERAL INFORMATION OF THE FACULTY:
            </div>
            <div className="col-4">
              <div>
                <span className="h6">Name : </span>
                <span>{userInfo.name}</span>
              </div>
            </div>
            <div className="col-4">
              <div>
                <span className="h6">designation : </span>
                <span>{userInfo.designation}</span>
              </div>
            </div>
            <div className="col-4">
              <div>
                <span className="h6">department : </span>
                <span>{userInfo.department}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">highestQualification : </span>
                <span>{userInfo.highestQualification}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">DOB : </span>
                <span>{userInfo.highestQuadoblification}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">dateofjoining : </span>
                <span>{userInfo.dateofjoining}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">phd : </span>
                <span>{userInfo.phd}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">specialization : </span>
                <span>{userInfo.specialization}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">caste : </span>
                <span>{userInfo.caste}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">salary : </span>
                <span>{userInfo.salary}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">married : </span>
                <span>{userInfo.married}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">mobile : </span>
                <span>{userInfo.mobile}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">email : </span>
                <span>{userInfo.email}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">pan : </span>
                <span>{userInfo.pan}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">googleScholarlink : </span>
                <span>{userInfo.googleScholarlink}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">orcid : </span>
                <span>{userInfo.orcid}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">raked award sprices : </span>
                <span>{userInfo.rakedawardsprices}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">experiance : </span>
                <span>{userInfo.experiance}</span>
              </div>
            </div>
            <div className="col-4 mt-2">
              <div>
                <span className="h6">feedback from peers : </span>
                <span>{userInfo.feedbackfrompeers}</span>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 m-0">
              <div className="h6 text-center">Qualification</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>degree</th>
                    <th>University</th>
                    <th>College</th>
                    <th>Year</th>
                    <th>state</th>
                  </tr>
                </thead>
                <tbody>
                  {qualification.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.degree}</td>
                      <td>{item.University}</td>
                      <td>{item.College}</td>
                      <td>{item.Year}</td>
                      <td>{item.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">Experiance Details</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>company</th>
                    <th>designation</th>
                    <th>from</th>
                    <th>to</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.company}</td>
                      <td>{item.designation}</td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 p-0">
              <div className="h6 text-center">teaching process</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Class_Semester</th>
                    <th>CourseCodeName</th>
                    <th>no_of_scheduled_classes</th>
                    <th>no_of_actual_classes</th>
                  </tr>
                </thead>
                <tbody>
                  {teachingprocess.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.Class_Semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.no_of_scheduled_classes}</td>
                      <td>{item.no_of_actual_classes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6 p-0">
              <div className="h6 text-center">student feedbacks</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>feedbackscore1</th>
                    <th>feedbackscore2</th>
                  </tr>
                </thead>
                <tbody>
                  {studentfeedback.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.feedbackscore1}</td>
                      <td>{item.feedbackscore2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">results</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>no_of_students_appeared</th>
                    <th>no_of_students_passed</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.no_of_students_appeared}</td>
                      <td>{item.no_of_students_passed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">
                innovative teaching methodology
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>teachingmethodology</th>
                  </tr>
                </thead>
                <tbody>
                  {innovativeteachingmethodology.map(
                    (item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.semester}</td>
                        <td>{item.CourseCodeName}</td>
                        <td>{item.teachingmethodology}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">content beyond syllabus</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>content</th>
                  </tr>
                </thead>
                <tbody>
                  {contentbeyondsyllabus.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">e_content developed</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>content</th>
                  </tr>
                </thead>
                <tbody>
                  {e_contentdeveloped.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">course files</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>semester</th>
                    <th>CourseCodeName</th>
                    <th>content</th>
                  </tr>
                </thead>
                <tbody>
                  {coursefiles.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.semester}</td>
                      <td>{item.CourseCodeName}</td>
                      <td>{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">
                cirtification cources by faculty
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>offeredby</th>
                  </tr>
                </thead>
                <tbody>
                  {cirtificationcourcesbyfaculty.map(
                    (item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.offeredby}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">
                details of faculty development program
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>offeredby</th>
                    <th>no_of_days</th>
                  </tr>
                </thead>
                <tbody>
                  {detailsoffacultydevelopmentprogram.map(
                    (item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.offeredby}</td>
                        <td>{item.no_of_days}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">additional activity</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>activity</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalactivity.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">faculty exchange</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>date</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyexchange.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">publication_of_Journals</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Authors</th>
                    <th>name</th>
                    <th>publisher</th>
                    <th>date</th>
                  </tr>
                </thead>
                <tbody>
                  {publication_of_Journals.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.Authors}</td>
                      <td>{item.name}</td>
                      <td>{item.publisher}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">project guidence</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>item</th>
                    <th>score</th>
                  </tr>
                </thead>
                <tbody>
                  {projectguidence.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.item}</td>
                      <td>{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">patents</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>title</th>
                    <th>applicantName</th>
                    <th>mobile</th>
                    <th>date</th>
                  </tr>
                </thead>
                <tbody>
                  {patents.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.applicantName}</td>
                      <td>{item.mobile}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="h6 text-center">funding</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>nameofproposal</th>
                    <th>nameofagency</th>
                    <th>amount</th>
                  </tr>
                </thead>
                <tbody>
                  {funding.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.nameofproposal}</td>
                      <td>{item.nameofagency}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="h6 text-center">consultancy</div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>consultancyactivity</th>
                    <th>agency</th>
                    <th>amount</th>
                  </tr>
                </thead>
                <tbody>
                  {consultancy.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.consultancyactivity}</td>
                      <td>{item.agency}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <div
        className="modal fade"
        id="scoreModal"
        tabIndex={1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Give Score
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="teachingProcess" className="form-label">
                      teaching Process
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("teachingProcess")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="studentFeedback" className="form-label">
                      student Feedback
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("studentFeedback")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="results" className="form-label">
                      results
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("results")}
                    />
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="innovativeTeachingMethodology"
                      className="form-label"
                    >
                      innovative Teaching Methodology
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("innovativeTeachingmethodology")}
                    />
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="contentBeyondSyllabus"
                      className="form-label"
                    >
                      content Beyond Syllabus
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("contentbeyondthesyllabus")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="eContentDeveloped" className="form-label">
                      e Content Developed
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("e_contentdeveloped")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="courseFiles" className="form-label">
                      course Files
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("coursefiles")}
                    />
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="certificationCoursesByFaculty"
                      className="form-label"
                    >
                      certification Courses By Faculty
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("certificationCourses")}
                    />
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="detailsOfFacultyDevelopmentProgram"
                      className="form-label"
                    >
                      details Of Faculty Development Program
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register(
                        "detailsofFacultyDevelopmentProgram"
                      )}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="additionalActivity" className="form-label">
                      additional Activity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("additionalActivity")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="facultyExchange" className="form-label">
                      faculty Exchange
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("facultyExchange")}
                    />
                  </div>
                  <div className="col-3">
                    <label
                      htmlFor="publicationOfJournals"
                      className="form-label"
                    >
                      publication Of Journals
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("publicationofJournals")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="projectGuidance" className="form-label">
                      project Guidance
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("projectGuidence")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="patents" className="form-label">
                      patents
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("patents")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="funding" className="form-label">
                      funding
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("funding")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="consultancy" className="form-label">
                      consultancy
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("consultancy")}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="feedback" className="form-label">
                      feedback
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...scoreForm.register("feedback")}
                    />
                  </div>
                  <div className="col-12 mt-3 text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={scoreForm.handleSubmit(async (data) => {
                        try {
                          const userId = window.location.pathname.split("/")[3]
                          let total1 =
                            Number(data.teachingProcess) +
                            Number(data.studentFeedback) +
                            Number(data.results) +
                            Number(data.innovativeTeachingmethodology) +
                            Number(data.contentbeyondthesyllabus) +
                            Number(data.e_contentdeveloped) +
                            Number(data.coursefiles);
                          let total2 =
                            Number(data.certificationCourses) +
                            Number(data.detailsofFacultyDevelopmentProgram) +
                            Number(data.additionalActivity) +
                            Number(data.facultyExchange);
                          let tatal3 =
                            Number(data.publicationofJournals) +
                            Number(data.projectGuidence) +
                            Number(data.patents) +
                            Number(data.funding) +
                            Number(data.consultancy);
                          // console.log(total1,total2,tatal3)
                          const dataToSend = {
                            ...data,
                            facultyId: userInfo.id,
                            total1,
                            total2,
                            tatal3,
                          };
                          await api.patch(`scores/${userId}`, dataToSend);
                          toast.success("Score added successfully");
                        } catch (error: any) {
                          toast.error(error.response.data.message);
                        }
                      })}
                      data-bs-dismiss="modal"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
