import "./scores.css";
import Header from "../shared/header/Header";
//import Footer from "../shared/footer/Footer";
import { useEffect, useState } from "react";
import { api } from "../api";
import ReactApexChart from "react-apexcharts";
//import { Line } from "react-chartjs-2";
export default function WebsiteScores() {
  const [userScores, setUserScores] = useState({} as any);
  const [scores, setScores] = useState([] as number[]);
  let state: any = {
    series: [
      {
        name: "Score",
        data: scores,
        color:"#ff4d01"
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Feedback from Peers (50)",
          "Research Activities (150)",
          " Professional related contributions (100)",
          "Teaching & Learning Process(200)",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val ;
          },
        },
      },
      title: {
        text: "Section wise Scores",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  const getScores = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem("user") || "{}");
      const res = await api.get(`scores/${user.id}`);
      console.log(res.data, "res");
      let scores = [];
      scores.push(res.data.feedback);
      scores.push(res.data.tatal3);
      scores.push(res.data.total2);
      scores.push(res.data.total1);
      setScores(scores);
      setUserScores(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getScores();
  }, []);

  return (
    <>
      <Header />
      <div className="text">{userScores.name}</div>
      <div style={{ height: "90vh" }}>
        <div className="row mt-5 text-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
          <table border={1}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <tr>
                  <span className="h6">teachingProcess : </span>
                  <td><span>{userScores.teachingProcess}</span></td>
                  </tr>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <tr>
                    <td><span className="h6">studentFeedback : </span></td>
                  <td><span>{userScores.studentFeedback}</span></td>
                  </tr>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <tr>
                  <td><span className="h6">results : </span></td>
                 <td> <span>{userScores.results}</span></td>
                  </tr>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <tr>
                 <td><span className="h6">innovativeTeachingmethodology : </span></td>
                  <td><span>{userScores.innovativeTeachingmethodology}</span></td>
                  </tr>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">contentbeyondthesyllabus : </span>
                  <span>{userScores.contentbeyondthesyllabus}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">e_contentdeveloped : </span>
                  <span>{userScores.e_contentdeveloped}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">coursefiles : </span>
                  <span>{userScores.coursefiles}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">certificationCourses : </span>
                  <span>{userScores.certificationCourses}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">
                    detailsofFacultyDevelopmentProgram :{" "}
                  </span>
                  <span>{userScores.detailsofFacultyDevelopmentProgram}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">additionalActivity : </span>
                  <span>{userScores.additionalActivity}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">facultyExchange : </span>
                  <span>{userScores.facultyExchange}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">publicationofJournals : </span>
                  <span>{userScores.publicationofJournals}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">projectGuidence : </span>
                  <span>{userScores.projectGuidence}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">patents : </span>
                  <span>{userScores.patents}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">funding : </span>
                  <span>{userScores.funding}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">consultancy : </span>
                  <span>{userScores.consultancy}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">feedback : </span>
                  <span>{userScores.feedback}</span>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <div>
                  <span className="h6">
                    Teaching & Learning Process(200) :{" "}
                  </span>
                  <span>{userScores.total1}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">
                    Professional related contributions (100) :{" "}
                  </span>
                  <span>{userScores.total2}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">Research Activities (150) :</span>
                  <span>{userScores.tatal3}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <span className="h6">Feedback from Peers (50) :</span>
                  <span>{userScores.feedback}</span>
                </div>
              </div>
            </div>
          </div>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={()=> window.print()} >
          Download
        </button>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
